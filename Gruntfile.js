module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: {
      build: {
        files: {
          "dist/bundle.js": "src/**/*.js",
        },
        options: {
          transform: [
            ['babelify', { presets: 'react' }]
          ]
        }
      },
      watch: {
        files: {
          "dist/bundle.js": "src/**/*.js",
        },
        options: {
          watch: true,
          keepAlive: true,
          transform: [
            ['babelify', { presets: 'react' }]
          ]
        }
      }
    }
  });

  grunt.registerTask('build', ['browserify:build']);
  grunt.registerTask('watch', ['browserify:watch']);

};
