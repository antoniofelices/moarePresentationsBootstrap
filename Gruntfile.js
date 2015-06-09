/*
 *
 * Gruntfile moare presentations Bootstrap
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
          sourcemap: true,
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
          cssDir:'dist/assets/stylesheets',
          sourcemap: true,
          outputStyle: 'compressed',
          environment: 'production'
        }
      }
    },

    //Uglify
    uglify: {
      options: {
        preserveComments: false,
      },
      all: {
        files: {
          'dist/assets/js/require.min.js': ['app/js/lib/requirejs/require.js']
        }
      }
    },

    //Watch
    watch: {
      css: {
        files: ['app/scss/*.scss','app/scss/plugins/*.scss'],
        tasks: ['compass:dev']
      }
    },

    // require
    requirejs: {
      compile: {
        options: {
          mainConfigFile : "app/js/main.js",
          baseUrl : "app/js",
          name: "main",
          out: "dist/assets/js/main.min.js",
          removeCombined: true,
          findNestedDependencies: true
        }
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Register tasks
  grunt.registerTask('default', ['compass:dev','watch']);
  grunt.registerTask('prod', ['compass:prod','uglify','requirejs']);
};
