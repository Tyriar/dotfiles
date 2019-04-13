import { symlinkOrReplaceFilesInFolderSync } from "../util/files";
import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';

module.exports.install = function () {
  if (process.platform === 'win32') {
    logHelper.logStepStarted('pwsh');
    var sourceDir = path.join(__dirname, '../../data/pwsh');
    var destDir = path.join(process.env.HOME!, 'Documents/PowerShell');
    var files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
};
