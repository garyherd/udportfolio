module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
  });

  grunt.loadNpmTasks('');

  // Register default tasks
  grunt.registerTask('default', ['imagemin']);
};