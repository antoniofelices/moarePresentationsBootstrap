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
          targetDir: 'app/assets/js',
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
          cssDir: 'app/assets/stylesheets',
          sourcemap: true,
          sassDir: 'app/assets/scss',
          imagesDir: 'app/assets/images',
          javascriptsDir: 'app/assets/js',
          fontsDir: 'app/assets/fonts',
          outputStyle: 'expanded',
          environment: 'development'
        }
      },
      prod: {
        options: {
          httpPath: '/',
          sassDir:'app/assets/scss',
          specify: 'app/assets/scss/main.scss',
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
          'dist/assets/js/require.min.js': ['app/assets/js/lib/requirejs/require.js']
        }
      }
    },

    //Watch
    watch: {
      css: {
        files: ['app/assets/scss/*.scss','app/assets/scss/plugins/*.scss'],
        tasks: ['compass:dev']
      }
    },
    
    //Copy
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['*.html'],
          dest: 'dist/'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'app/assets/imgs',
          src: ['*.{png,jpg,svg,gif}'],
          dest: 'dist/assets/imgs'
        }]
      },
      imagescss: {
        files: [{
          expand: true,
          cwd: 'app/assets/imgs/css',
          src: ['*.{png,jpg,svg,gif}'],
          dest: 'dist/assets/imgs/css'
        }]
      },
      fonts:{
        files: [{
          expand: true,
          cwd: 'app/assets/fonts',
          src: ['**/*.*'],
          dest: 'dist/assets/fonts'
        }]
      },
    },

    //Replace
    'string-replace': {
      inline: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: '*.html',
          dest: 'dist/',
        }],
        options: {
          replacements: [
            {
              pattern: '<script data-main="assets/js/main" src="assets/js/lib/requirejs/require.js"></script>',
              replacement: '<script data-main="assets/js/main.min" src="assets/js/require.min.js"></script>'
            }
          ]
        }
      }
    },

    // require
    requirejs: {
      compile: {
        options: {
          mainConfigFile : "app/assets/js/main.js",
          baseUrl : "app/assets/js",
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Register tasks
  grunt.registerTask('default', ['compass:dev','watch']);
  grunt.registerTask('prod', ['compass:prod','copy','string-replace','uglify','requirejs']);
};
