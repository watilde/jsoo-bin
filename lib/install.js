'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['--version'], function (err) {
  if (err) {
    log.error(err.message);
    log.error('js_of_ocaml binary test failed');
    return;
  }

  log.success('js_of_ocaml binary test passed successfully');
});
