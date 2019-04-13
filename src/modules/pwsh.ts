import { symlinkOrReplaceFilesInFolderSync } from '../util/files';
import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';

export function install(): void {
  if (process.platform === 'win32') {
    logHelper.logStepStarted('pwsh');
    const sourceDir = path.join(__dirname, '../../data/pwsh');
    const destDir = path.join(process.env.HOME!, 'Documents/PowerShell');
    const files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
}
