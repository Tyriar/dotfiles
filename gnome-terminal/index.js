var execAndReportSync = require('../util/exec-and-report-sync');
var fs = require('fs');
var getHomePath = require('home-path');
var path = require('path');
var process = require('process');
var symlinkOrReplaceFilesInFolderSync = require('../util/symlink-or-replace-files-in-folder-sync');

module.exports.install = function () {
  if (process.platform !== 'win32') {
    console.log('gnome-terminal');
    execAndReportSync('  applying profile theme', path.join(__dirname, 'profile-preferences.sh'));
  }
};
