#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var meow = require('meow');
var process = require('process');

var allModules = [
  'atom',
  'bash',
  'bin',
  'fonts',
  'git',
  'gnome-terminal',
  'vim',
  'vscode'
];

var cli = meow({
  help: [
    'Usage: dotfiles install [<module>...]',
    '',
    'where <module> is one or more of of:',
    '    ' + allModules.join(', '),
    '',
    'Specify no <module> to install everything'
  ]
});

if (cli.input.length === 0) {
  console.error('Error: No command specified');
  cli.showHelp();
  process.exit(1);
}

var commands = {
  'install': install
};

if (cli.input[0] in commands) {
  commands[cli.input[0]].call(undefined, cli.input.splice(1));
}

function install(moduleList) {
  if (moduleList.length === 0) {
    allModules.forEach(installModule);
  } else {
    moduleList.forEach(installModule);
  }
}

function installModule(module) {
  if (allModules.indexOf(module) === -1) {
    console.error('Error: tried to install non-existing module "' + module + '"');
    return;
  }
  require('./' + module).install();
}
