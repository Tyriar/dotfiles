var chalk = require('chalk');
var os = require('os');

function logStepStarted(step: string) {
  console.log(step);
}

function logSubStepSuccess(actionName: string) {
  logSubStepPartialStarted(actionName);
  logSubStepPartialSuccess();
}

function logSubStepFail(actionName: string) {
  logSubStepPartialStarted(actionName);
  logSubStepPartialFail();
}

function logSubStepPartialStarted(actionName: string) {
  process.stdout.write('  ' + actionName);
}

function logSubStepPartialSuccess() {
  var successChar = process.platform === 'win32' ? '\u221A' : '✔';
  process.stdout.write(' ' + chalk.green(successChar) + os.EOL);
}

function logSubStepPartialFail() {
  var successChar = process.platform === 'win32' ? 'X' : '✗';
  process.stdout.write(' ' + chalk.red(successChar) + os.EOL);
}

module.exports = {
  logStepStarted: logStepStarted,
  logSubStepSuccess: logSubStepSuccess,
  logSubStepFail: logSubStepFail,
  logSubStepPartialStarted: logSubStepPartialStarted,
  logSubStepPartialSuccess: logSubStepPartialSuccess,
  logSubStepPartialFail: logSubStepPartialFail
}
