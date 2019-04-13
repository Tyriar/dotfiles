import * as logHelper from '../util/log-helper';
import * as os from 'os';
const syncExec = require('sync-exec');

export function execAndReportSync(actionName: string, command: string): void {
  logHelper.logSubStepPartialStarted(actionName);
  const result = syncExec(command);
  if (result.status === 0) {
    const successChar = process.platform === 'win32' ? '\u221A' : '✔';
    process.stdout.write(` \x1b[32m${successChar}\x1b[0m${os.EOL}`);
  } else {
    logHelper.logSubStepFail('Error running command: ' + command);
    console.error(result);
  }
}
