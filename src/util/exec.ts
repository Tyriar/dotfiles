import * as logHelper from '../util/log-helper';
import * as os from 'os';
import { execSync } from 'child_process';

export function execAndReportSync(actionName: string, command: string): void {
  logHelper.logSubStepPartialStarted(actionName);

  try {
    execSync(command);
    const successChar = process.platform === 'win32' ? '\u221A' : '✔';
    process.stdout.write(` \x1b[32m${successChar}\x1b[0m${os.EOL}`);
  } catch (err) {
    logHelper.logSubStepFail('Error running command: ' + command);
    console.error(err);
  }
}
