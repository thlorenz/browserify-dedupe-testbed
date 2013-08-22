var browserify = require('../browserify');

browserify()
  .require('./foo', { entry: true })
  .bundle(function (err, bundle) {
    if (err) return console.error(err);
    console.log('\n\n=================================\n\n');
    console.log(bundle.split('\n').slice(1).join('\n'));
    eval(bundle); 
  });
