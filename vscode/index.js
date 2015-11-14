var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../util/log-helper');
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../util/symlink-or-replace-files-in-folder-sync');

function getVSCodeConfigDir() {
  var baseDir = getHomePath();
  if (process.platform === 'win32') {
    baseDir = path.join(baseDir, 'AppData', 'Roaming');
  } else {
    baseDir = path.join(baseDir, '.config');
  }
	return path.join(baseDir, 'Code', 'User');
}

module.exports.install = function () {
  logHelper.logStepStarted('vscode');
  var sourceDir = path.join(__dirname, 'config'); 
  var destDir = getVSCodeConfigDir();
  var files = fs.readdirSync(sourceDir);
  logHelper.logSubStepPartialStarted('applying config files');
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
  logHelper.logSubStepPartialSuccess();
};
