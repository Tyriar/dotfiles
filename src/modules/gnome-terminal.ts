import * as logHelper from '../util/log-helper';
import * as path from 'path';
import { execAndReportSync } from "../util/exec";
const gnomeTerminalVersion = require('gnome-terminal-version');
const semver = require('semver');

module.exports.install = function () {
  if (process.platform === 'linux') {
    gnomeTerminalVersion((version: string) => {
      logHelper.logStepStarted('gnome-terminal');
      if (version === undefined || !semver.valid(version)) {
        logHelper.logSubStepFail('gnome-terminal doesn\'t seem to be installed');
        return;
      }

      if (semver.major(version) == 3 && semver.minor(version) >= 8 || semver.major(version) > 3) {
        execAndReportSync('applying profile theme (Gnome 3.8+)', path.join(__dirname, '..', '..', 'data', 'gnome-terminal', 'profile-theme-3.8.sh'));
      } else {
        execAndReportSync('applying profile theme', path.join(__dirname, 'profile-theme.sh'));
      }
    });
  }
};
