var fs = require('fs');
var logHelper = require('../../util/log-helper');
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../../util/symlink-or-replace-files-in-folder-sync');

module.exports.install = function () {
  if (process.platform === 'win32') {
    logHelper.logStepStarted('pwsh');
    var sourceDir = path.join(__dirname, 'config');
    var destDir = path.join(process.env.HOME, 'Documents', 'PowerShell');
    var files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
};
