#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var meow = require('meow');
var process = require('process');

var allPrograms = [
  'atom',
  'bash',
  'bin',
  'git',
  'gnome-terminal',
  'vim',
  'vscode'
];

var cli = meow({
	help: [
		'Usage: dotfiles install [<program>...]',
		'',
		'where <program> is one or more of of:',
		'    ' + allPrograms.join(', '),
    '',
    'Specify no <program> to install everything'
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

function install(programList) {
  if (programList.length === 0) {
    allPrograms.forEach(installProgram);
  } else {
    programList.forEach(installProgram);
  }
}

function installProgram(program) {
  if (allPrograms.indexOf(program) === -1) {
    console.error('Error: tried to install non-existing program "' + program + '"');
    return;
  }
  require('./' + program).install();
}
