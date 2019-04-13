import * as os from 'os';

const SUCCESS_CHAR = process.platform === 'win32' ? '\u221A' : '✔';

export function logStepStarted(step: string): void {
  console.log(step);
}

export function logSubStepSuccess(actionName: string): void {
  logSubStepPartialStarted(actionName);
  logSubStepPartialSuccess();
}

export function logSubStepFail(actionName: string): void {
  logSubStepPartialStarted(actionName);
  logSubStepPartialFail();
}

export function logSubStepPartialStarted(actionName: string): void {
  process.stdout.write('  ' + actionName);
}

export function logSubStepPartialSuccess(): void {
  process.stdout.write(`  \x1b[32m${SUCCESS_CHAR}\x1b[0m${os.EOL}`);
}

export function logSubStepPartialFail(): void {
  process.stdout.write(`  \x1b[31m${SUCCESS_CHAR}\x1b[0m${os.EOL}`);
}
