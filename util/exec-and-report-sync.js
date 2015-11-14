var chalk = require('chalk');
var os = require('os');
var process = require('process');
var syncExec = require('sync-exec');

module.exports = function (actionMessage, command) {
  process.stdout.write(actionMessage);
  var result = syncExec(command);
  if (result.status === 0) {
    var successChar = process.platform === 'win32' ? '\u221A' : '✔';
    process.stdout.write(' ' + chalk.green(successChar) + os.EOL);
  } else {
    console.error(chalk.red('Error running command: ' + command));
    console.error(result);
  }
}