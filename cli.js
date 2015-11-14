#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var meow = require('meow');
var process = require('process');

var allPrograms = [
  'atom',
  'bash'
];

var cli = meow({
	help: [
		'Usage: dotfiles install [<program>]',
		'',
		'where <program> is one of:',
		'    atom',
    '',
    'Specify no <program> to install everything'
	]
});

if (cli.input.length === 0) {
  console.error('Error: No command specified');
  cli.showHelp();
  process.exit(1);
}

// vscode windows settings are at ~\\AppData\\Roaming\\Code\\User
var commands = {
  'install': install
};

if (cli.input[0] in commands) {
  commands[cli.input[0]].apply(undefined, cli.input.slice(1));
}

function install(programList) {
  console.log(programList);
  if (programList === undefined) {
    allPrograms.forEach(installProgram);
  } else {
    installProgram(programList);
  }
}

function installProgram(program) {
  if (allPrograms.indexOf(program) === -1) {
    console.error('Error: tried to install non-existing program "' + program + '"');
    return;
  }
  require('./' + program).install();
}
