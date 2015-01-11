'use strict';
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var bin = require('bin-wrapper');
var tmpWrite = require('temp-write');
var tmpFile = tmpWrite.sync('');
var argv = require('minimist')(process.argv.slice(2));
var files = argv._.join(' ');
var out = argv.o || argv.out;
var command;
var pkg = require('../package.json');
var help = 'Usage:\n';
help += '    jsoo [ml files] -o [out file name]\n';
help += '\n';
help += 'Examples:\n';
help += '    jsoo hello.ml -o hello.js\n';
help += '\n';
help += 'Options:\n';
help += '    -h, --help    Print this message\n';
help += '    -o, --out     Output to single file\n';
help += '    -v, --version Print jsoo-bin version';

if (argv.v || argv.version) {
  console.info(pkg.version);
  return;
}
if (files == null || out == null || argv.h || argv.help) {
  console.info(help);
  return;
}

out = path.resolve(out);
command = 'ocamlc ' + files + ' -o ' + tmpFile;
exec(command, function (err, stdout, stderr) {
  if (err) {
    console.error(stderr);
    fs.unlinkSync(tmpFile);
  }
  command = __dirname + '/../bin/js_of_ocaml ' + tmpFile + ' -o ' + out;
  exec(command, function (err, stdout, stderr) {
    if (err) {
      console.error(stderr);
    }
    fs.unlinkSync(tmpFile);
  });
});
