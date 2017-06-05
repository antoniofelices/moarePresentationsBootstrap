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
                    targetDir: 'app/assets/js/lib',
                    layoud: 'byComponent',
                    install: true,
                    copy: true,
                    cleanBowerDir: true
                }
            }
        },

        //Sass
        sass: {
            dev:{
                options: {
                    sourceMap: true,
                    sourceMapEmbed: false,
                    sourceMapContents: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/assets/scss',
                    src: ['*.{scss,sass}'],
                    dest: 'app/assets/stylesheets',
                    ext: '.css'
                }]
            }
        },

        //Watch
        watch: {
            css: {
                files: ['app/assets/scss/*.scss','app/assets/scss/plugins/*.scss'],
                tasks: ['sass:dev']
            }
        },

        //Uglify
        uglify: {
            options: {
                preserveComments: false,
            },
            all: {
                files: {
                    'dist/assets/js/main.min.js': ['app/assets/js/main.js']
                }
            }
        },

        // CSSmin
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'dist/assets/stylesheets/main.css': ['app/assets/stylesheets/main.css']
                }
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
                    src: ['**/*.{png,jpg,svg,gif}'],
                    dest: 'dist/assets/imgs'
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
                            pattern: '<script src="/assets/js/main.js"></script>',
                            replacement: '<script src="/assets/js/main.min.js"></script>'
                        },
                    ]
                }
            }
        },

        //BrowserSync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "app/assets/stylesheets/*.css",
                        "app/**/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }


    });

    // Load tasks
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');

    // Register tasks
    grunt.registerTask('default', ['browserSync','watch']);
    grunt.registerTask('build', ['cssmin','copy','string-replace','uglify']);
};
