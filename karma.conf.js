module.exports = function (config) {

  config.set({
    basePath: '.',
    frameworks: ['jasmine', 'requirejs'],
    files : [
      'bower_components/bind-polyfill/index.js',

      { pattern: 'test/colors.js', included: true},

      { pattern: 'bower_components/**/*.js', included: false},
    ],

    proxies: {},

    reporters : ['progress'],
    port : 8079,
    runnerPort : 9100,
    colors : true,
    logLevel : config.LOG_INFO,
    autoWatch : true,
    browsers : ['Chrome'],
    captureTimeout : 5000,
    singleRun : false
  });

};
