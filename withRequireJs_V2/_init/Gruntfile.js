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
                        '../_dev/css/sass/plugins',
                        '../_dev/css/sass/responsive',
                        '../_dev/js',
                        '../_dev/js/app',
                        '../_dev/js/plugins',
                        '../_dev/js/build',
                        '../_dev/js/lib',
                        '../_dev/html',
                        '../img',
                        '../img/icons',
                        '../fonts',
                        '../uploads',
                        '../pages'
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
                    fs.writeSync(fd, '<!DOCTYPE html>\n<html lang="pt-br">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta name="description" content="">\n\t\t<meta name="keywords" content="">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>\n\t\t<title></title>\n\t\t<link rel="stylesheet" type="text/css" href="css/app.min.css">\n\t\t<!--[if lt IE 9]>\n\t\t\t<script type="text/javascript" src="js/html5shiv.min.js"></script>\n\t\t\t<script type="text/javascript" src="js/respond.min.js"></script>\n\t\t<![endif]-->\n\t\t<!--[if lte IE 8]>\n\t\t\t<script type="text/javascript" src="js/json3.min.js"></script>\n\t\t<![endif]-->\n\t\t<style type="text/css">\n\t\t\tbody{\n\t\t\t\t-moz-opacity: 0.00;\n\t\t\t\t-khtml-opacity: 0.00;\n\t\t\t\topacity: 0.00;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>');
                    done();
                },
                "../footer.php": function(fs, fd, done) {
                    fs.writeSync(fd, '\n\t\t<!--script data-main="_dev/js/build/config.js" src="_dev/js/lib/requirejs.js"></script-->\n\t\t<script src="js/jquery.min.js"></script>\n\t\t<script src="js/app.min.js"></script>\n\t</body>\n</html>');
                    done();
                },
                "../_dev/js/build/config.js" : function(fs, fd, done){
                    fs.writeSync(fd, 'requirejs.config({\n\tpaths: {\n\t\tmain : "../app/main",\n\t},\n\tshim: {\n\t\tmain : {}\n\t}\n});\n\nrequire(["main"]);');
                    done();
                },
                "../_dev/js/app/initPlugins.js" : function(fs, fd, done){
                    fs.writeSync(fd, 'define(function(require){\n\tvar init = function(){};\n\treturn {\n\t\tinit : init\n\t};\n});');
                    done();
                },
                "../_dev/js/app/utilFuncs.js" : function(fs, fd, done){
                    fs.writeSync(fd, 'define(function(require){\n\tvar init = function(){};\n\treturn {\n\t\tinit : init\n\t};\n});');
                    done();
                },
                "../_dev/js/app/main.js" : function(fs, fd, done){
                    fs.writeSync(fd, 'define(function(require){\n\trequire("../plugins/scroll");\n\trequire("../plugins/jquery.html5-placeholder-shim");\n\n\tvar initPlugins = require("../app/initPlugins");\n\tvar utilFuncs = require("../app/utilFuncs");\n\n\t$(document).ready(function(){\n\n\t\tinitPlugins.init();\n\t\tutilFuncs.init();\n\n\t\t$("body").fadeTo(300, 1);\n\t\t$(window).scroll();\n\t\t$(window).resize();\n\t});\n});');
                    done();
                },
                "../_dev/css/css/style.css": function(fs, fd, done) {done();},
                "../_dev/css/sass/style.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '@import "compass/css3";\n\n/*@import "compass/utilities/sprites";\n@import "icons/*.png";\n$icons: sprite-map("icons/*.png", $spacing: 10px);/**/\n\n@import "dynamics";\n@import "fonts";\n\n@import "_bootstrapGrid";\n@import "normalize";\n@import "classes";\n\n@import "icons";\n@import "buttons";\n@import "texts";\n\n@import "elements";\n@import "forms";\n@import "tables";\n@import "boxes";\n\n@import "interactives";\n@import "structs";\n@import "pages";\n\n@import "responsive/_max1100";\n@import "responsive/_max992";\n@import "responsive/_max530";\n@import "responsive/_max375";');
                    done();
                },
                "../_dev/css/sass/_boxes.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_buttons.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_classes.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_dynamics.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_elements.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_fonts.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_forms.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_icons.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_interactives.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_pages.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_structs.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_tables.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/_texts.scss": function(fs, fd, done) {done();},
                "../_dev/css/sass/responsive/_max1100.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-max1100{\n\tdisplay: none;\n}\n\n@media (max-width: 1100px){\n\t.hide-max1100{\n\t\tdisplay: none;\n\t}\n\t.show-max1100{\n\t\tdisplay: block;\n\t}\n}');
                    done();
                },
                "../_dev/css/sass/responsive/_max992.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-992{\n\tdisplay: none;\n}\n.mobile{\n\tdisplay: none;\n}\n\n@media (max-width: 992px){\n\t.hide-992{\n\t\tdisplay: none !important;\n\t}\n\t.show-992{\n\t\tdisplay: block;\n\t}\n\n\t.desktop{\n\t\tdisplay: none;\n\t}\n\t.mobile{\n\t\tdisplay: block;\n\t}\n\n\tbody, html{\n\t\toverflow-x: hidden;\n\t\toverflow-y: auto;\n\t}\n}');
                    done();
                },
                "../_dev/css/sass/responsive/_max530.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-max530{\n\tdisplay: none;\n}\n\n@media (max-width: 530px){\n\t.hide-max530{\n\t\tdisplay: none;\n\t}\n\t.show-max530{\n\t\tdisplay: block;\n\t}\n}');
                    done();
                },
                "../_dev/css/sass/responsive/_max375.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-max375{\n\tdisplay: none;\n}\n\n@media (max-width: 375px){\n\t.hide-max375{\n\t\tdisplay: none;\n\t}\n\t.show-max375{\n\t\tdisplay: block;\n\t}\n}');
                    done();
                },
                "../js/app.min.js": function(fs, fd, done) {done();},
                "../css/app.min.css": function(fs, fd, done) {done();}
            }
        },
        copy: { // copia arquivos basicos do bower para local correto
            main: {
                files : [
                    {
                        src: 'bower_components/jquery/index.js',
                        dest: '../js/jquery.min.js'
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
                        dest: '../js/html5shiv.min.js'
                    },
                    {
                        src: 'bower_components/json3/index.js',
                        dest: '../js/json3.min.js'
                    },
                    {
                        src: 'bower_components/respond/index.js',
                        dest: '../js/respond.min.js'
                    },
                    {
                        src: 'bower_components/scroll/index.js',
                        dest: '../_dev/js/plugins/scroll.js'
                    },
                    {
                        src: 'bower_components/placeholder/index.js',
                        dest: '../_dev/js/plugins/jquery.html5-placeholder-shim.js'
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