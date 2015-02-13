/*global module:false*/
var timer = require('grunt-timer');

module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  timer.init(grunt);

  grunt.initConfig({

    karma: {
      options : {
        configFile: './karma.conf.js'
      },

      run: {
        singleRun     : true,
        autoWatch     : false
      },

      autorun: {
        singleRun     : false,
        autoWatch     : true,
      },

      local: {
        singleRun     : true,
        browsers      : ['PhantomJS'],
        reporters     : ['dots'],
      },

      jenkins: {
        singleRun     : true,
        browsers      : ['PhantomJS'],
        reporters     : ['dots', 'junit'],
        captureTimeout: 20000,
        junitReporter : {
          outputFile  : './reports/js.xml'
        }
      }
    }
  });

  grunt.registerTask('default', ['karma:local']);
};
