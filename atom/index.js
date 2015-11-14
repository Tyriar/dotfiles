var chalk = require('chalk');
var fs = require('fs');
var getHomePath = require('home-path');
var packageNames = require('./packages').names;
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../util/symlink-or-replace-files-in-folder-sync');
var execAndReportSync = require('../util/exec-and-report-sync');

function installConfig() {
  var sourceDir = path.join(__dirname, 'config'); 
  var destDir = path.join(getHomePath(), '.atom');
  var files = fs.readdirSync(sourceDir);
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
}

function installAllPackages() {
  packageNames.forEach(installPackage);
}

function installPackage(name) {
  if (!fs.existsSync(path.join(getHomePath(), '.atom', 'packages', name))) {
    execAndReportSync('  installing ' + name, 'apm install ' + name);
  } else {
    var successChar = process.platform === 'win32' ? '\u221A' : '✔';
    console.log('  ' + name + ' already installed ' + chalk.green(successChar));
  }
}

module.exports.install = function () {
  console.log('atom');
  installConfig();
  installAllPackages();
};
