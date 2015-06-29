require('./bind-polyfill.js');
require('./globals.js');
require('./setup-component-mounting.js');

var context = require.context('./components/autocomplete', true, /\.js$/);
context.keys().forEach(context);
