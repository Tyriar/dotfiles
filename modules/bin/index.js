var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../../util/log-helper');
var mkdirpSync = require('mkdirp').sync;
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../../util/symlink-or-replace-files-in-folder-sync');

module.exports.install = function () {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('bin');
    var sourceDir = path.join(__dirname, 'commands');
    var destDir = path.join(getHomePath(), 'bin');
    mkdirpSync(destDir);
    var files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('exposing commands in ~/bin');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
};
