var chalk = require('chalk');
var fs = require('fs');
var getHomePath = require('home-path');
var os = require('os');
var packageNames = require('./packages').names;
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../util/symlink-or-replace-files-in-folder-sync');
var syncExec = require('sync-exec');

function installConfig() {
  console.log('Installing atom...');
  var sourceDir = path.join(__dirname, 'config'); 
  var destDir = path.join(getHomePath(), '.atom');
  var files = fs.readdirSync(sourceDir);
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
}

function installAllPackages() {
  packageNames.forEach(installPackage);
}

function installPackage(name) {
  process.stdout.write('Installing ' + name);
  var result = syncExec('apm install ' + name);
  if (result.status === 0) {
    var successChar = process.platform === 'win32' ? '\u221A' : '✔';
    process.stdout.write(' ' + chalk.green(successChar) + os.EOL);
  } else {
    console.error('Error installing ' + name);
    console.error(result);
  }
}

module.exports.install = function () {
  installConfig();
  installAllPackages();
};
