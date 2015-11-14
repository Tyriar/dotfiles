var chalk = require('chalk');
var getHomePath = require('home-path');
var os = require('os');
var packageNames = require('./packages').names;
var path = require('path');
var process = require('process');
var symlinkOrReplaceSync = require('../util').symlinkOrReplaceSync;
var syncExec = require('sync-exec');

function installConfig() {
  console.log('Installing atom...');
  var configDir = path.join(getHomePath(), '.atom');
  symlinkOrReplaceSync(path.join(__dirname, 'config', 'config.cson'), path.join(configDir, 'config.cson'));
  symlinkOrReplaceSync(path.join(__dirname, 'config', 'keymap.cson'), path.join(configDir, 'keymap.cson'));
  symlinkOrReplaceSync(path.join(__dirname, 'config', 'styles.less'), path.join(configDir, 'styles.less'));
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
