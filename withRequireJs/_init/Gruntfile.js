module.exports = function (grunt) {
    grunt.initConfig({
        mkdir: { // cria diretorios
            all : {
                options : {
                    mode : 0777,
                    create : [
                        '../css',
                        '../js',
                        '../_dev',
                        '../_dev/css',
                        '../_dev/css/css',
                        '../_dev/css/sass',
                        '../_dev/js',
                        '../_dev/js/plugins',
                        '../_dev/js/build',
                        '../_dev/js/lib',
                        '../_dev/html',
                        '../img',
                        '../img/icons',
                        '../fonts'
                    ]
                }
            }
        },
        "file-creator": { // gera arquivos automaticamente
            "basic": {
                "../index.php": function(fs, fd, done) {
                    fs.writeSync(fd, '<?php require_once("header.php"); ?>\n\n<?php require_once("footer.php"); ?>');
                    done();
                },
                "../header.php": function(fs, fd, done){
                    fs.writeSync(fd, '<!DOCTYPE html>\n<html lang="pt-br">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta name="description" content="">\n\t\t<meta name="keywords" content="">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>\n\t\t<title></title>\n\t\t<link rel="stylesheet" type="text/css" href="css/app.min.css">\n\t\t<!--[if lt IE 9]>\n\t\t\t<script type="text/javascript" src="js/html5shiv.js"></script>\n\t\t\t<script type="text/javascript" src="js/respond.min.js"></script>\n\t\t<![endif]-->\n\t\t<!--[if lte IE 8]>\n\t\t\t<script type="text/javascript" src="js/json3.min.js"></script>\n\t\t<![endif]-->\n\t</head>\n\t<body>');
                    done();
                },
                "../footer.php": function(fs, fd, done) {
                    fs.writeSync(fd, '\n\t\t<!--script data-main="_dev/js/build/config.js" src="_dev/js/lib/requirejs.js"></script-->\n\t\t<script src="js/app.min.js"></script>\n\t</body>\n</html>');
                    done();
                },
                "../_dev/js/build/config.js" : function(fs, fd, done){
                    fs.writeSync(fd, 'requirejs.config({\n\tpaths: {\n\t\tjquery : "../lib/jquery",\n\t\tmain : "../app/main",\n\t},\n\tshim: {\n\t\tjquery : {\n\t\t\texports : "$"\n\t\t},\n\t\tmain : {\n\t\t\tdeps : ["jquery"]\n\t\t}\n\t}\n});\n\nrequire(["main"]);');
                    done();
                },
                "../_dev/js/app/main.js" : function(fs, fd, done){
                    fs.writeSync(fd, 'define(function(require){});');
                    done();
                },
                "../_dev/css/css/style.css": function(fs, fd, done) {done();},
                "../_dev/css/sass/style.scss": function(fs, fd, done) {done();},
                "../js/app.min.js": function(fs, fd, done) {done();},
                "../css/app.min.css": function(fs, fd, done) {done();}
            }
        },
        copy: { // copia arquivos basicos do bower para local correto
            main: {
                files : [
                    {
                        src: 'bower_components/jquery/index.js',
                        dest: '../_dev/js/lib/jquery.js'
                    },
                    {
                        src: 'bower_components/requirejs/index.js',
                        dest: '../_dev/js/lib/requirejs.js'
                    },
                    {
                        src: 'bower_components/normalize/index.css',
                        dest: '../_dev/css/sass/_normalize.scss'
                    },
                    {
                        src: 'bower_components/bootstrapGrid/index.scss',
                        dest: '../_dev/css/sass/_bootstrapGrid.scss'
                    },
                    {
                        src: 'bower_components/html5shiv/index.js',
                        dest: '../js/html5shiv.js'
                    },
                    {
                        src: 'bower_components/json3/index.js',
                        dest: '../js/json3.js'
                    },
                    {
                        src: 'bower_components/respond/index.js',
                        dest: '../js/respond.js'
                    }
                ]
            }
        },
        compass: { // roda o compass
            dev: {
                options: {
                    sassDir: '../_dev/css/sass',
                    cssDir: '../_dev/css/css',
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
                src: ["../_dev/css/css/*.css"],
                dest: "../css/app.css"
            },
        },
        cssmin: { // comprime o css
            options: {
                keepSpecialComments: 0
            },
            minify: {
                expand: true,
                cwd: '../css/',
                src: ['app.css', '!*.min.css'],
                dest: '../css/',
                ext: '.min.css'
            }
        },
        requirejs: { // otmiza os arquivos js - otmiza o require js [concatna e comprime]
            compile: {
                options: {
                    baseUrl : '../_dev/js/build',
                    mainConfigFile : '../_dev/js/build/config.js',
                    name : 'config',
                    out : '../js/app.min.js',
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    paths: {
                        requireLib : '../lib/requirejs'
                    },
                    include : 'requireLib'
                }
            }
        },
        watch: { // assiste updates nos arquivos especificados
            files: ['../_dev/css/sass/**/*', '../_dev/js/**/*'],
            tasks: ['wm-app']
        }
    });

    // carrega as tasks
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-file-creator');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // registra tasks personalizadas
    grunt.registerTask('wm-mkd', ['mkdir:all', 'file-creator:basic', 'copy']);
    grunt.registerTask('wm-app', ['compass:dev', 'concat_css', 'cssmin:minify', 'requirejs']);
}