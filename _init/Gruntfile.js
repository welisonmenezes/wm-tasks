module.exports = function (grunt) {
    grunt.initConfig({
        mkdir: { // cria diretorios
            all: {
                options: {
                    mode: 0700,
                    create: ['../css', '../css/dev', '../css/dev/css', '../css/dev/sass', '../img/', '../img/icons', '../js', '../js/dev', '../js/dev/plugins', '../fonts']
                }
            }
        },
        "file-creator": { // gera arquivos automaticamente
            "basic": {
                "../index.php": function(fs, fd, done) {
                    fs.writeSync(fd, '<!DOCTYPE html>\n<html lang="pt-br">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta name="description" content="">\n\t\t<meta name="keywords" content="">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>\n\t\t<title></title>\n\t\t<link rel="stylesheet" type="text/css" href="css/app.min.css">\n\t\t<!--[if lt IE 9]><script type="text/javascript" src="js/html5shiv.js"></script><![endif]-->\n\t</head>\n\t<body>\n\t\t<script type="text/javascript" src="js/app.min.js"></script>\n\t</body>\n</html>');
                    done();
                },
                "../css/app.min.css": function(fs, fd, done) {done();},
                "../css/dev/css/style.css": function(fs, fd, done) {done();},
                "../css/dev/sass/style.scss": function(fs, fd, done) {done();},
                "../js/app.min.js": function(fs, fd, done) {done();},
                "../js/dev/functions.js": function(fs, fd, done) {
                    fs.writeSync(fd, '(function(){\n\t$(document).ready(function(){\n\t});\n})();');
                    done();
                },
                "../js/dev/app.js": function(fs, fd, done) {done();}
            }
        },
        copy: { // copia arquivos basicos do bower para local correto
            main: {
                files : [
                    {
                        src: 'bower_components/jquery/index.js',
                        dest: '../js/dev/jquery.js'
                    },
                    {
                        src: 'bower_components/html5shiv/index.js',
                        dest: '../js/html5shiv.js'
                    },
                    {
                        src: 'bower_components/normalize/index.css',
                        dest: '../css/dev/sass/_normalize.scss'
                    }
                ]
            }
        },
        concat: { // concatena os arquivos js
            options: {
                separator: ';',
            },
            dist: { // concatena nessa ordem
                src: ['../js/dev/jquery.js', '../js/dev/plugins/**/*.js', '../js/dev/functions.js'],
                dest: '../js/dev/app.js',
            }
        },
        jshint: { // valida o js
            options: {
                ignores: ['../js/dev/app.js', '../js/dev/jquery*.js', '../js/dev/plugins/**/*.js']
            },
            beforeconcat: ['../js/dev/*.js'],
            //afterconcat: ['js/app.js']
        },
        uglify: { // comprime o js
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    '../js/app.min.js': ['../js/dev/app.js']
                }
            }
        },
        compass: { // roda o compass
            dev: {
                options: {
                    sassDir: '../css/dev/sass',
                    cssDir: '../css/dev/css',
                    httpPath: './',
                    imagesDir: '../img',
                    imagesPath: '../img',
                    generatedImagesDir: '../img',
                    generatedImagesPath: '../img'
                }
            }
        },
        concat_css: { // concatena o css
            options: {},
            all: {
                src: ["../css/dev/css/*.css"],
                dest: "../css/dev/app.css"
            },
        },
        cssmin: { // comprime o css
            minify: {
                expand: true,
                cwd: '../css/dev/',
                src: ['app.css', '!*.min.css'],
                dest: '../css/',
                ext: '.min.css'
            }
        },
        watch: {
            files: ['../css/dev/sass/*', '../js/dev/*'],
            tasks: ['wm-app'],
        }
    });

    // carrega as tasks
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-file-creator');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // registra tasks personalizadas
    grunt.registerTask('wm-mkd', ['mkdir:all', 'file-creator:basic', 'copy']);
    grunt.registerTask('wm-app', ['concat', 'jshint', 'uglify', 'compass:dev', 'concat_css', 'cssmin:minify']);
}