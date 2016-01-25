module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          "dist/bundle.js": "src/**/*.js",
        },
        options: {
          transform: [
            [ 'babelify', { presets: 'react' } ]
          ]
        }
      }
    }
  });

  grunt.registerTask('build', [ 'browserify' ]);

};
