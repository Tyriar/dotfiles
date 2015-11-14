var fs = require('fs');
var process = require('process');
var symlinkOrCopySync = require('symlink-or-copy').sync;

module.exports = function (srcPath, destPath) {
  if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  symlinkOrCopySync(srcPath, destPath);
};
