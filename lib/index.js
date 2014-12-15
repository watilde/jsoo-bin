'use strict';
var path = require('path');
var bin = require('bin-wrapper');

module.exports = new bin()
  .src('https://github.com/ocsigen/js_of_ocaml/archive/2.5.zip', 'darwin')
  .dest(path.join(__dirname, '../vendor'))
  .use('compiler/js_of_ocaml');
