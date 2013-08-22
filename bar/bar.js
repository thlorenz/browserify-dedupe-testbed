// bar.js

var common = require('common');

var go = module.exports = function () {
  console.log('bar - common', common());  
};
