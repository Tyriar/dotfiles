var chalk = require('chalk');
var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../../util/log-helper');
var mkdirpSync = require('mkdirp').sync;
var packageNames = require('./packages').names;
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../../util/symlink-or-replace-files-in-folder-sync');
var execAndReportSync = require('../../util/exec-and-report-sync');

function installConfig() {
  var sourceDir = path.join(__dirname, 'config');
  var destDir = path.join(getHomePath(), '.atom');
  mkdirpSync(destDir);
  var files = fs.readdirSync(sourceDir);
  logHelper.logSubStepPartialStarted('applying config files');
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
  logHelper.logSubStepPartialSuccess();
}

function installAllPackages() {
  packageNames.forEach(installPackage);
}

function installPackage(name) {
  if (!fs.existsSync(path.join(getHomePath(), '.atom', 'packages', name))) {
    execAndReportSync('installing ' + name, 'apm install ' + name);
  } else {
    logHelper.logSubStepSuccess(name + ' already installed');
  }
}

module.exports.install = function () {
  logHelper.logStepStarted('atom');
  installConfig();
  installAllPackages();
};
