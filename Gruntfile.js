module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
      imagemin: {
          options: {
              use: [mozjpeg()]
          },
          files: {
              'views/images/pizzeria.jpg': 'src/views/images/pizzeria.jpg',
              'img/profilepic.jpg': 'src/img/profilepic.jpg'
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register default tasks
  grunt.registerTask('default', ['imagemin']);
};