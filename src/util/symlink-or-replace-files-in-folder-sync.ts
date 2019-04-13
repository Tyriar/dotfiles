var path = require('path');
var symlinkOrReplaceSync = require('./symlink-or-replace-sync');

module.exports = function (fileNames: string[], srcDir: string, destDir: string) {
  fileNames.forEach(function (fileName) {
    symlinkOrReplaceSync(path.join(srcDir, fileName), destDir, fileName);
  });
};
