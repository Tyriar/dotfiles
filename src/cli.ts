import * as meow from 'meow';

const allModules = [
  'bash',
  'fonts',
  'git',
  'gnome-terminal',
  'pwsh',
  'vim',
  'vscode'
];

const cli = meow([
  `Usage: dotfiles install [<module>...]`,
  ``,
  `where <module> is one or more of:`,
  `    ${allModules.join(', ')}`,
  ``,
  `Specify no <module> to install everything`
], {});

if (cli.input.length === 0) {
  console.error('Error: No command specified');
  cli.showHelp();
  process.exit(1);
}

const commands = {
  install
};

if (cli.input[0] in commands) {
  (commands as any)[cli.input[0]].call(undefined, cli.input.splice(1));
}

function install(moduleList: string[]): void {
  if (moduleList.length === 0) {
    allModules.forEach(installModule);
  } else {
    moduleList.forEach(installModule);
  }
}

function installModule(m: string): void {
  if (allModules.indexOf(m) === -1) {
    console.error(`Error: tried to install non-existing module "${m}"`);
    return;
  }
  require(`./modules/${m}`).install();
}
