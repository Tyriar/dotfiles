var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../util/log-helper');
var path = require('path');
var symlinkOrReplaceFilesInFolderSync = require('../util/symlink-or-replace-files-in-folder-sync');

module.exports.install = function () {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('vim');
    var sourceDir = path.join(__dirname, '..', '..', 'data', 'vim');
    var destDir = path.join(getHomePath());
    var files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
};
