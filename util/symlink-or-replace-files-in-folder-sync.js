var path = require('path');
var symlinkOrReplaceSync = require('./symlink-or-replace-sync');

module.exports = function (fileNames, srcDir, destDir) {
  fileNames.forEach(function (fileName) {
    symlinkOrReplaceSync(path.join(srcDir, fileName), path.join(destDir, fileName));
  });
};
