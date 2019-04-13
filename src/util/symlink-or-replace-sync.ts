var fs = require('fs');
var mkdirpSync = require('mkdirp').sync;
var path = require('path');
var symlinkOrCopySync = require('symlink-or-copy').sync;

module.exports = function (srcPath: string, destDir: string, fileName: string) {
  var destPath = path.join(destDir, fileName);
  if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  mkdirpSync(destDir);
  symlinkOrCopySync(srcPath, destPath);
};
