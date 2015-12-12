var chalk = require('chalk');
var logHelper = require('../util/log-helper');
var os = require('os');
var process = require('process');
var syncExec = require('sync-exec');

module.exports = function (actionName, command) {
  logHelper.logSubStepPartialStarted(actionName);
  var result = syncExec(command);
  if (result.status === 0) {
    var successChar = process.platform === 'win32' ? '\u221A' : '✔';
    process.stdout.write(' ' + chalk.green(successChar) + os.EOL);
  } else {
    logHelper.logSubStepFail('Error running command: ' + command);
    console.error(result);
  }
}