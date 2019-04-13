import * as logHelper from '../util/log-helper';
import * as path from 'path';
import { execAndReportSync } from '../util/exec';

export function install(): void {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('fonts');
    execAndReportSync('installing hack', path.join(__dirname, '../../data/fonts/install-hack.sh'));
  }
}
