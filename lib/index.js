'use strict';
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var bin = require('bin-wrapper');
var tmpWrite = require('temp-write');
var tmpFile = tmpWrite.sync('');
var outFile = tmpWrite.sync('');
var File = tmpWrite.sync('');
var argv = require('minimist')(process.argv.slice(2));
var files = argv._.join(' ');
var out = argv.o || argv.out;
var command;
var stdout = '';
var pkg = require('../package.json');
var help = 'Usage:\n';
help += '    jsoo [options] [ml files]\n';
help += '\n';
help += 'Examples:\n';
help += '    jsoo foo.ml bar.ml baz.ml\n';
help += '    jsoo foo.ml bar.ml baz.m -o out.js\n';
help += '\n';
help += 'Options:\n';
help += '    -h, --help    Print this message\n';
help += '    -o, --out     Output to single file\n';
help += '    -v, --version Print jsoo-bin version';

if (argv.v || argv.version) {
  console.info(pkg.version);
  return;
}
if (!files || argv.h || argv.help) {
  console.info(help);
  return;
}

if (!out) {
  out = path.resolve(out);
}
command = 'ocamlc ' + files + ' -o ' + tmpFile;
exec(command, function (err, stdout, stderr) {
  if (err) {
    console.error(stderr);
    fs.unlinkSync(tmpFile);
  }
  if (!out) {
    command = __dirname + '/../bin/js_of_ocaml ' + tmpFile + ' -o ' + out;
  } else {
    command = __dirname + '/../bin/js_of_ocaml ' + tmpFile + ' -o ' + outFile;
  }
  exec(command, function (err, stdout, stderr) {
    if (err) {
      console.error(stderr);
    }
    if (!out) {
      stdout = fs.readFileSync(outFile);
      process.stdout.write(stdout);
    }
    fs.unlinkSync(tmpFile);
    fs.unlinkSync(outFile);
  });
});
