import { symlinkOrReplaceFilesInFolderSync } from '../util/files';
import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';
const getHomePath = require('home-path');

export function install(): void {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('bash');
    const sourceDir = path.join(__dirname, '../../data/bash');
    const destDir = path.join(getHomePath());
    const files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
}
