import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';
import { symlinkOrReplaceFilesInFolderSync } from "../util/files";
import { execAndReportSync } from "../util/exec";
const getHomePath = require('home-path');

var extensions = [
  "cssho.vscode-svgviewer",
  "EditorConfig.EditorConfig",
  "eg2.tslint",
  "eg2.vscode-npm-script",
  "felipecaputo.git-project-manager",
  "pkief.material-icon-theme",
  "Tyriar.theme-sapphire",
  "wayou.vscode-todo-highlight"
];

function getBaseDir() {
  var baseDir = getHomePath();
  if (process.platform === 'win32') {
    baseDir = path.join(baseDir, 'AppData/Roaming');
  } else if (process.platform === 'darwin') {
    baseDir = path.join(baseDir, 'Library/Application Support');
  } else {
    baseDir = path.join(baseDir, '.config');
  }
  return baseDir;
}

function getConfigDirInsiders() {
  return path.join(getBaseDir(), 'Code - Insiders/User');
}

function getConfigDirExploration() {
  return path.join(getBaseDir(), 'Code - Exploration/User');
}

module.exports.install = function () {
  logHelper.logStepStarted('vscode');
  installConfigFiles();
  installExtensions();
};

function installConfigFiles() {
  logHelper.logSubStepPartialStarted('installing config files');
  var sourceDir = path.join(__dirname, '../../data/vscode');
  var files = fs.readdirSync(sourceDir);
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, getConfigDirInsiders());
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, getConfigDirExploration());
  logHelper.logSubStepPartialSuccess();
}

function installExtensions() {
  extensions.forEach(installExtension);
}

function installExtension(name: string) {
  execAndReportSync(`installing ${name}`, `code-insiders --install-extension ${name}`);
  execAndReportSync(`installing ${name}`, `code-exploration --install-extension ${name}`);
}
