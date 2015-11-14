var process = require('process');

function install() {
  if (process.platform !== 'win32') {
    console.log('Installing bash...');
  }
}

module.exports.install = install;
