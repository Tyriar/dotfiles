var execAndReportSync = require('../../util/exec-and-report-sync');
var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../../util/log-helper');
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../../util/symlink-or-replace-files-in-folder-sync');

function getBaseDir() {
  var baseDir = getHomePath();
  if (process.platform === 'win32') {
    baseDir = path.join(baseDir, 'AppData', 'Roaming');
  } else if (process.platform === 'darwin') {
    baseDir = path.join(baseDir, 'Library', "Application Support");
  } else {
    baseDir = path.join(baseDir, '.config');
  }
  return baseDir;
}

function getStableConfigDir() {
  return path.join(getBaseDir(), 'Code', 'User');
}

module.exports.install = function () {
  logHelper.logStepStarted('vscode');
  installConfigFiles();
  installSymlinksForVariants();
  installExtensions();
};

function installConfigFiles() {
  logHelper.logSubStepPartialStarted('installing config files');
  var sourceDir = path.join(__dirname, 'config');
  var files = fs.readdirSync(sourceDir);
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, getStableConfigDir());
  logHelper.logSubStepPartialSuccess();
}

function installSymlinksForVariants() {
  execAndReportSync('setting up symlinks for variants', path.join(__dirname, 'symlink_variants.sh "' + getBaseDir() + '"'));
}

function installExtensions() {
  execAndReportSync('installing extensions', path.join(__dirname, 'install_extensions.sh "' + getBaseDir() + '"'));
}
