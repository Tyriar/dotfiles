var fs = require('fs');
var symlinkOrCopySync = require('symlink-or-copy').sync;

function symlinkOrReplaceSync(srcPath, destPath) {
  if (fs.statSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  symlinkOrCopySync(srcPath, destPath);
}

module.exports.symlinkOrReplaceSync = symlinkOrReplaceSync;
