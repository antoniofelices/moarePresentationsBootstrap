/*
 *
 * Gruntfile moare presentations
 *
 */

'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Bower
    bower:{
      install: {
        options: {
          targetDir: 'app/js',
          layoud: 'byComponent',
          install: true,
          cleanBowerDir: true
        }
      }
    },

    //Compass
    compass: {
      dev: {
        options: {
          httpPath: '/',
          cssDir: 'app/stylesheets',
          sassDir: 'app/scss',
          imagesDir: 'app/images',
          javascriptsDir: 'app/js',
          fontsDir: 'app/fonts',
          outputStyle: 'expanded',
          environment: 'development'
        }
      },
      prod: {
        options: {
          httpPath: '/',
          sassDir:'app/scss',
          specify: 'app/scss/main.scss',
          cssDir:'dist/assets/css',
          outputStyle: 'compressed',
          environment: 'production'
        }
      }
    },

    //Require

    //Uglify

    //Watch
    watch: {
      css: {
        files: ['app/scss/*.scss','app/scss/plugins/*.scss'],
        tasks: ['compass:dev']
      }
    }


  });

  // Load tasks
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register tasks
  grunt.registerTask('default', ['compass:dev','watch']);
  grunt.registerTask('prod', ['compass']);
};
