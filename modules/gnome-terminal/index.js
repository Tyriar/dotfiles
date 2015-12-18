var chalk = require('chalk');
var execAndReportSync = require('../../util/exec-and-report-sync');
var fs = require('fs');
var getHomePath = require('home-path');
var gnomeTerminalVersion = require('gnome-terminal-version');
var logHelper = require('../../util/log-helper');
var path = require('path');
var process = require('process');
var semver = require('semver');
var symlinkOrReplaceFilesInFolderSync = require('../../util/symlink-or-replace-files-in-folder-sync');

module.exports.install = function () {
  if (process.platform === 'linux') {
    gnomeTerminalVersion(function (version) {
      logHelper.logStepStarted('gnome-terminal');
      if (version === undefined || !semver.valid(version)) {
        logHelper.logSubStepFail('gnome-terminal doesn\'t seem to be installed');
        return;
      }

      if (semver.major(version) == 3 && semver.minor(version) >= 8 || semver.major(version) > 3) {
        execAndReportSync('applying profile theme (Gnome 3.8+)', path.join(__dirname, 'profile-theme-3.8.sh'));
      } else {
        execAndReportSync('applying profile theme', path.join(__dirname, 'profile-theme.sh'));
      }
    });
  }
};
