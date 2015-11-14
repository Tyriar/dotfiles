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
  console.log('Error: No command specified');
  cli.showHelp();
  process.exit(1);
}

var commands = {
  'install': install
};

if (cli.input[0] in commands) {
  commands[cli.input[0]].apply(cli.input.splice(1));
}

function install(programList) {
  if (programList === undefined) {
    allPrograms.forEach(installProgram);
  } else {
    installProgram(programList);
  }
}

function installProgram(program) {
  console.log(program);
  if (allPrograms.indexOf(program) === -1) {
    console.log('Error: tried to install non-existing program "' + program + '"');
    return;
  }
  require('./' + program).install();
}
