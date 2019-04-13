import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';
import { symlinkOrReplaceFilesInFolderSync } from "../util/files";
const getHomePath = require('home-path');

module.exports.install = function () {
  logHelper.logStepStarted('git');
  var sourceDir = path.join(__dirname, '../../data/git');
  var destDir = path.join(getHomePath());
  var files = fs.readdirSync(sourceDir);
  logHelper.logSubStepPartialStarted('applying config files');
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, destDir);
  logHelper.logSubStepPartialSuccess();
};
