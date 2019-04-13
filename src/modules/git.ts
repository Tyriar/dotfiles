import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';
import { symlinkOrReplaceFilesInFolderSync } from '../util/files';
const getHomePath = require('home-path');

export function install(): void {
  logHelper.logStepStarted('git');
  const sourceDir = path.join(__dirname, '../../data/git');
  const destDir = path.join(getHomePath());
  const files = fs.readdirSync(sourceDir);
  logHelper.logSubStepPartialStarted('applying config files');
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
  logHelper.logSubStepPartialSuccess();
}
