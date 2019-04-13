import * as fs from 'fs';
import { sync as mkdirpSync } from 'mkdirp';
import * as path from 'path';
import { sync as symlinkOrCopySync } from 'symlink-or-copy';

export function symlinkOrReplaceSync(srcPath: string, destDir: string, fileName: string) {
  var destPath = path.join(destDir, fileName);
  if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath);
  }
  mkdirpSync(destDir);
  symlinkOrCopySync(srcPath, destPath);
};

export function symlinkOrReplaceFilesInFolderSync(fileNames: string[], srcDir: string, destDir: string) {
  fileNames.forEach(function (fileName) {
    symlinkOrReplaceSync(path.join(srcDir, fileName), destDir, fileName);
  });
};
