import * as os from 'os';

export function logStepStarted(step: string) {
  console.log(step);
}

export function logSubStepSuccess(actionName: string) {
  logSubStepPartialStarted(actionName);
  logSubStepPartialSuccess();
}

export function logSubStepFail(actionName: string) {
  logSubStepPartialStarted(actionName);
  logSubStepPartialFail();
}

export function logSubStepPartialStarted(actionName: string) {
  process.stdout.write('  ' + actionName);
}

export function logSubStepPartialSuccess() {
  var successChar = process.platform === 'win32' ? '\u221A' : '✔';
  process.stdout.write(`  \x1b[32m${successChar}\x1b[0m${os.EOL}`);
}

export function logSubStepPartialFail() {
  var successChar = process.platform === 'win32' ? 'X' : '✗';
  process.stdout.write(`  \x1b[31m${successChar}\x1b[0m${os.EOL}`);
}
