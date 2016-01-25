module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('basicTask', 'Log some stuff', function() {
    grunt.log.write('Logging some stuff...').ok();
    return true;
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    browserify: {
      "dist/bundle.js": "src/**/*.js",
      options: {
        transform: [
          [ 'babelify', { presets: 'react' } ]
        ]
      }
    }
  });

};
