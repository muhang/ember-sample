/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var svgmerge = require('broccoli-svgmerge');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp({
    fingerprint: false,
    minifyCSS: {
        enabled: true
    },
    minifyJS: {
        enabled: true
    }
});

if (process.env.EMBER_ENV === 'debug' || process.env.EMBER_ENV === 'test') {
    app.options.minifyCSS.enabled = false;
    app.options.minifyJS.enabled = false;
}

// if (config.environment === '')

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var svgIcons = svgmerge('public/assets/icons/', {
  outputFile: '/assets/icons/icons.svg'
});

app.import('bower_components/moment/moment.js');
app.import('bower_components/progressbar.js/dist/progressbar.js');
app.import('bower_components/highcharts/highcharts.js');
app.import('bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js');
app.import('bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js');
app.import('bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css');
app.import('bower_components/jquery-ui/jquery-ui.js');
app.import('bower_components/jquery-ui/ui/widget.js');
app.import('bower_components/ember-localstorage-adapter/localstorage_adapter.js');

module.exports = mergeTrees([svgIcons, app.toTree()]);

