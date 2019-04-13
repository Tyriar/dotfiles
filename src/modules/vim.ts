import { symlinkOrReplaceFilesInFolderSync } from "../util/files";
import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';
const getHomePath = require('home-path');

module.exports.install = function () {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('vim');
    var sourceDir = path.join(__dirname, '../../data/vim');
    var destDir = path.join(getHomePath());
    var files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
};
