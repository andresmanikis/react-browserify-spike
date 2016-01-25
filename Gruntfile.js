module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      files: [ 'src/**/*.js' ],
      tasks: [ 'build' ]
    },
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
