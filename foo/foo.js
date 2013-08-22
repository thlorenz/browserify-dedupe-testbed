// foo.js

var common = require('common');
var bar = require('../bar');

var go = module.exports = function () {
  console.log('foo - common', common());  
  console.log('foo-bar', bar());
};
