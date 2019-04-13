import { symlinkOrReplaceFilesInFolderSync } from "../util/files";

var fs = require('fs');
var getHomePath = require('home-path');
var logHelper = require('../util/log-helper');
var path = require('path');

module.exports.install = function () {
  if (process.platform !== 'win32') {
    logHelper.logStepStarted('bash');
    var sourceDir = path.join(__dirname, '../../data/bash');
    var destDir = path.join(getHomePath());
    var files = fs.readdirSync(sourceDir);
    logHelper.logSubStepPartialStarted('applying config files');
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
    logHelper.logSubStepPartialSuccess();
  }
};
