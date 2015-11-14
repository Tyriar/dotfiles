var chalk = require('chalk');
var os = require('os');
var process = require('process');

function logStepStarted(step) {
  console.log(step);
}

function logSubStepSuccess(actionName) {
  logSubStepPartialStarted(actionName);
  logSubStepPartialSuccess();
}

function logSubStepFail(actionName) {
  logSubStepPartialStarted(actionName);
  logSubStepPartialFail();
}

function logSubStepPartialStarted(actionName) {
  process.stdout.write('  ' + actionName);
}

function logSubStepPartialSuccess() {
  var successChar = process.platform === 'win32' ? '\u221A' : '✔';
  process.stdout.write(' ' + chalk.green(successChar) + os.EOL);
}

function logSubStepPartialFail() {
  var successChar = process.platform === 'win32' ? 'X' : '✗';
  process.stdout.write(' ' + chalk.green(successChar) + os.EOL);
}

module.exports = {
  logStepStarted: logStepStarted,
  logSubStepSuccess: logSubStepSuccess,
  logSubStepFail: logSubStepFail,
  logSubStepPartialStarted: logSubStepPartialStarted,
  logSubStepPartialSuccess: logSubStepPartialSuccess,
  logSubStepPartialFail: logSubStepPartialFail
}