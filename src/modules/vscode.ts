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
  'Tyriar.theme-topaz',
  'wayou.vscode-todo-highlight',
  'ms-vscode.vscode-typescript-tslint-plugin',
  'ms-vscode.powershell-preview',
  'ms-vscode-remote.remote-containers',
  'ms-vscode-remote.remote-ssh',
  'ms-vscode-remote.remote-ssh-edit',
  'ms-vscode-remote.remote-ssh-explorer',
  'ms-vscode-remote.remote-wsl',
  'ms-vscode-remote.vscode-remote-extensionpack',
  'github.vscode-pull-request-github-insiders',
  'usernamehw.errorlens'
];

function getSettingsPath(quality: string): string {
  let baseDir = getHomePath();
  if (process.platform === 'win32') {
    baseDir = path.join(baseDir, 'AppData/Roaming');
  } else if (process.platform === 'darwin') {
    baseDir = path.join(baseDir, 'Library/Application Support');
  } else {
    baseDir = path.join(baseDir, '.config');
  }
  return path.join(baseDir, `Code - ${quality}/User`);
}

function installConfigFiles(): void {
  ['Insiders', 'Exploration'].forEach(quality => {
    logHelper.logSubStepPartialStarted(`installing config files for ${quality}`);
    const configDirInsiders = getSettingsPath(quality);
    const sourceDir = path.join(__dirname, '../../data/vscode');
    const files = fs.readdirSync(sourceDir);
    symlinkOrReplaceFilesInFolderSync(files, sourceDir, configDirInsiders);
    logHelper.logSubStepPartialSuccess();
  });
}

function installExtensions(): void {
  extensions.forEach(installExtension);
}

function installExtension(name: string): void {
  execAndReportSync(`installing ${name} for Insiders`, `code-insiders --install-extension ${name}`);
  execAndReportSync(`installing ${name} for Exploration`, `code-exploration --install-extension ${name}`);
}

export function install(): void {
  logHelper.logStepStarted('vscode');
  installConfigFiles();
  installExtensions();
}
