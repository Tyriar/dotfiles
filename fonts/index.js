var execAndReportSync = require('../util/exec-and-report-sync');
var logHelper = require('../util/log-helper');
var path = require('path');
var process = require('process');

module.exports.install = function () {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('fonts');
    execAndReportSync('installing hack', path.join(__dirname, 'install-hack.sh'));
  }
};
