import * as fs from 'fs';
import * as logHelper from '../util/log-helper';
import * as path from 'path';
import { symlinkOrReplaceFilesInFolderSync } from '../util/files';
import { execAndReportSync } from '../util/exec';
const getHomePath = require('home-path');

const extensions = [
  'cssho.vscode-svgviewer',
  'EditorConfig.EditorConfig',
  'eg2.vscode-npm-script',
  'pkief.material-icon-theme',
  'Tyriar.theme-sapphire',
  'wayou.vscode-todo-highlight',
  'ms-vscode.vscode-typescript-tslint-plugin',
  'ms-vscode.powershell-preview'
];

function installConfigFiles(): void {
  let baseDir = getHomePath();
  if (process.platform === 'win32') {
    baseDir = path.join(baseDir, 'AppData/Roaming');
  } else if (process.platform === 'darwin') {
    baseDir = path.join(baseDir, 'Library/Application Support');
  } else {
    baseDir = path.join(baseDir, '.config');
  }
  const configDirInsiders = path.join(baseDir, 'Code - Insiders/User');

  logHelper.logSubStepPartialStarted('installing config files');
  const sourceDir = path.join(__dirname, '../../data/vscode');
  const files = fs.readdirSync(sourceDir);
  symlinkOrReplaceFilesInFolderSync(files, sourceDir, configDirInsiders);
  logHelper.logSubStepPartialSuccess();
}

function installExtensions(): void {
  extensions.forEach(installExtension);
}

function installExtension(name: string): void {
  execAndReportSync(`installing ${name}`, `code-insiders --install-extension ${name}`);
  execAndReportSync(`installing ${name}`, `code-exploration --install-extension ${name}`);
}

export function install(): void {
  logHelper.logStepStarted('vscode');
  installConfigFiles();
  installExtensions();
}
