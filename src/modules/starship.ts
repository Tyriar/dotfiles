import { symlinkOrReplaceFilesInFolderSync } from '../util/files';
import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';

export function install(): void {
  logHelper.logStepStarted('starship');
  const sourceDir = path.join(__dirname, '../../data/starship');
  const destDir = path.join(process.env.USERPROFILE || process.env.HOME!, '.config');
  const files = fs.readdirSync(sourceDir);
  logHelper.logSubStepPartialStarted('applying config files');
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
  logHelper.logSubStepPartialSuccess();
}
