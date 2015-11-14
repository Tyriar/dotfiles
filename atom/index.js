var fs = require('fs');
var getHomePath = require("home-path");
var os = require('os');
var path = require('path');
var process = require('process');
var symlinkOrCopySync = require('symlink-or-copy').sync;
var syncExec = require('sync-exec');

function installConfig() {
  console.log('Installing atom...');
  var configDir = path.join(getHomePath(), '.atom');
  symlinkOrReplaceSync(path.join(__dirname, 'config', 'config.cson'), path.join(configDir, 'config.cson'));
  symlinkOrReplaceSync(path.join(__dirname, 'config', 'keymap.cson'), path.join(configDir, 'keymap.cson'));
  symlinkOrReplaceSync(path.join(__dirname, 'config', 'styles.less'), path.join(configDir, 'styles.less'));
}

function symlinkOrReplaceSync(srcPath, destPath) {
  if (fs.statSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  symlinkOrCopySync(srcPath, destPath);
}

  //"project-finder":
  //  rootPath: "C:\\Users\\Daniel\\Documents\\GitHub"
function installPackages() {
  var packages = [
    "file-icons",
    "minimap",
    "minimap-find-and-replace",
    "multi-wrap-guide",
    "navigation-history",
    "project-finder",
    "project-manager",
    "sort-lines",
    "switch-header-source",
    "tab-switcher"
  ];
  packages.forEach(installPackage);
}

function installPackage(name) {
  process.stdout.write('Installing ' + name);
  var result = syncExec('apm install ' + name);
  if (result.status === 0) {
    process.stdout.write(' done' + os.EOL);
  } else {
    console.error('Error installing ' + name);
    console.error(result);
  }
}

module.exports.install = function () {
  installConfig();
  installPackages();
};
