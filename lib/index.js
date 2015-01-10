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

if (files == null || out == null || argv.h || argv.help) {
  console.info('Usage: jsoo <ml files> -o <out file name>');
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
