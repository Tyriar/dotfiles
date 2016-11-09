var execAndReportSync = require('../../util/exec-and-report-sync');
var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../../util/log-helper');
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../../util/symlink-or-replace-files-in-folder-sync');

var extensions = [
  "cssho.vscode-svgviewer",
  "EditorConfig.EditorConfig",
  "felipecaputo.git-project-manager",
  "jrieken.md-navigate",
  "mrmlnc.vscode-scss",
  "Tyriar.lorem-ipsum",
  "Tyriar.terminal-tabs",
  "Tyriar.theme-glacier"
];

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
  extensions.forEach(installExtension);
}

function installExtension(name) {
  execAndReportSync('installing ' + name, 'code-insiders --install-extension ' + name);
}
