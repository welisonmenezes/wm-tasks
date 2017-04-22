module.exports = function (grunt) {
    grunt.initConfig({
        mkdir: { // cria os diretorios do projeto
            all : {
                options : {
                    mode : 0777,
                    create : [
                        'css',
                        'css/css',
                        'css/sass',
                        'css/sass/plugins',
                        'css/sass/responsive',
                        'js',
                        'js/js',
                        'js/ts',
                        'js/plugins',
                        'js/lib',
                        'html',
                        '../css',
                        '../js',
                        '../img',
                        '../img/icons',
                        '../fonts',
                        '../uploads',
                        '../pages',
                        '../elements'
                    ]
                }
            }
        },
        "file-creator": { // gera arquivos automaticamente
            "basic": {
                "js/ts/Plugins.ts": function(fs, fd, done) {
                    fs.writeSync(fd, 'export class Plugins\n{\n\tpublic obj: any;\n\n\tpublic init(): void{}\n\n\tconstructor(){\n\t\tthis.init();\n\t}\n}');
                    done();
                },
                "js/ts/Util.ts": function(fs, fd, done) {
                    fs.writeSync(fd, 'export class Util\n{\n\tpublic obj: any;\n\n\tpublic init(): void{}\n\n\tconstructor(){\n\t\tthis.init();\n\t}\n}');
                    done();
                },
                "js/ts/main.ts": function(fs, fd, done) {
                    fs.writeSync(fd, 'declare var require: any;\nvar $: any = require("jquery");\nvar Plugins: any = require("./Plugins.js");\nvar Util: any = require("./Util.js");\n\n$(document).ready(function(){\n\t$("body").fadeTo(300, 1);\n\t\n\t$(window).scroll();\n\t$(window).resize();\n\n\tvar cP = new Plugins.Plugins;\n\tvar cU = new Util.Util;\n});');
                    done();
                },
                "css/css/style.css": function(fs, fd, done) {done();},
                "css/sass/style.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '@import "compass/css3";\n\n/*@import "compass/utilities/sprites";\n@import "icons/*.png";\n$icons: sprite-map("icons/*.png", $spacing: 10px);/**/\n\n@import "dynamics";\n@import "fonts";\n\n@import "_bootstrapGrid";\n@import "normalize";\n@import "classes";\n\n@import "icons";\n@import "buttons";\n@import "texts";\n\n@import "elements";\n@import "forms";\n@import "tables";\n@import "boxes";\n\n@import "interactives";\n@import "structs";\n@import "pages";\n\n@import "responsive/_max1100";\n@import "responsive/_max992";\n@import "responsive/_max530";\n@import "responsive/_max375";');
                    done();
                },
                "css/sass/_boxes.scss": function(fs, fd, done) {done();},
                "css/sass/_buttons.scss": function(fs, fd, done) {done();},
                "css/sass/_classes.scss": function(fs, fd, done) {done();},
                "css/sass/_dynamics.scss": function(fs, fd, done) {done();},
                "css/sass/_elements.scss": function(fs, fd, done) {done();},
                "css/sass/_fonts.scss": function(fs, fd, done) {done();},
                "css/sass/_forms.scss": function(fs, fd, done) {done();},
                "css/sass/_icons.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '/*.icon{\n\tdisplay: block;\n\tbackground-image: sprite-url($icons);\n\n\t&.{\n\t\tbackground-position: sprite-position($icons, );\n\t\t@include sprite-dimensions($icons, );\n\t}\n}*/');
                    done();
                },
                "css/sass/_interactives.scss": function(fs, fd, done) {done();},
                "css/sass/_pages.scss": function(fs, fd, done) {done();},
                "css/sass/_structs.scss": function(fs, fd, done) {done();},
                "css/sass/_tables.scss": function(fs, fd, done) {done();},
                "css/sass/_texts.scss": function(fs, fd, done) {done();},
                "css/sass/responsive/_max1100.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-1100{\n\tdisplay: none;\n}\n\n@media (max-width: 1100px){\n\t.hide-1100{\n\t\tdisplay: none;\n\t}\n\t.show-1100{\n\t\tdisplay: block;\n\t}\n}');
                    done();
                },
                "css/sass/responsive/_max992.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-992{\n\tdisplay: none;\n}\n.mobile{\n\tdisplay: none;\n}\n\n@media (max-width: 992px){\n\t.hide-992{\n\t\tdisplay: none !important;\n\t}\n\t.show-992{\n\t\tdisplay: block;\n\t}\n\n\t.desktop{\n\t\tdisplay: none;\n\t}\n\t.mobile{\n\t\tdisplay: block;\n\t}\n\n\tbody, html{\n\t\toverflow-x: hidden;\n\t\toverflow-y: auto;\n\t}\n}');
                    done();
                },
                "css/sass/responsive/_max530.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-530{\n\tdisplay: none;\n}\n\n@media (max-width: 530px){\n\t.hide-530{\n\t\tdisplay: none;\n\t}\n\t.show-530{\n\t\tdisplay: block;\n\t}\n}');
                    done();
                },
                "css/sass/responsive/_max375.scss": function(fs, fd, done) {
                    fs.writeSync(fd, '.show-375{\n\tdisplay: none;\n}\n\n@media (max-width: 375px){\n\t.hide-375{\n\t\tdisplay: none;\n\t}\n\t.show-375{\n\t\tdisplay: block;\n\t}\n}');
                    done();
                },
                "../index.php": function(fs, fd, done) {
                    fs.writeSync(fd, '<?php require_once("header.php"); ?>\n\n<?php require_once("footer.php"); ?>');
                    done();
                },
                "../header.php": function(fs, fd, done){
                    fs.writeSync(fd, '<!DOCTYPE html>\n<html lang="pt-br">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta name="description" content="">\n\t\t<meta name="keywords" content="">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>\n\t\t<title></title>\n\t\t<link rel="stylesheet" type="text/css" href="css/style.min.css">\n\t\t<!--[if lt IE 9]>\n\t\t\t<script type="text/javascript" src="js/html5shiv.min.js"></script>\n\t\t\t<script type="text/javascript" src="js/respond.min.js"></script>\n\t\t<![endif]-->\n\t\t<!--[if lte IE 8]>\n\t\t\t<script type="text/javascript" src="js/json3.min.js"></script>\n\t\t<![endif]-->\n\t\t<style type="text/css">\n\t\t\tbody{\n\t\t\t\t-moz-opacity: 0.00;\n\t\t\t\t-khtml-opacity: 0.00;\n\t\t\t\topacity: 0.00;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>');
                    done();
                },
                "../footer.php": function(fs, fd, done) {
                    fs.writeSync(fd, '\n\t\t<script src="js/app.min.js"></script>\n\t</body>\n</html>');
                    done();
                },
                "../js/app.min.js": function(fs, fd, done) {done();},
                "../css/style.min.css": function(fs, fd, done) {done();}
            }
        },
        copy: { // copia arquivos basicos do bower para local correto
            main: {
                files : [
                    {
                        src: 'bower_components/jquery/index.js',
                        dest: 'js/lib/jquery.min.js'
                    },
                    {
                        src: 'bower_components/normalize/index.css',
                        dest: 'css/sass/_normalize.scss'
                    },
                    {
                        src: 'bower_components/bootstrapGrid/index.scss',
                        dest: 'css/sass/_bootstrapGrid.scss'
                    },
                    {
                        src: 'bower_components/scroll/index.js',
                        dest: 'js/plugins/scroll.js'
                    },
                    {
                        src: 'bower_components/placeholder/index.js',
                        dest: 'js/plugins/jquery.html5-placeholder-shim.js'
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
                    }
                ]
            }
        },
        compass: { // roda o compass
            dev: {
                options: {
                    sassDir: 'css/sass',
                    cssDir: 'css/css',
                    httpPath: './',
                    imagesDir: '../img',
                    imagesPath: '../img',
                    generatedImagesDir: '../img',
                    generatedImagesPath: '../img'
                }
            }
        },
        cssmin: { // comprime o css
            options: {
                keepSpecialComments: 0
            },
            minify: {
                expand: true,
                cwd: 'css/css/',
                src: ['style.css', '!*.min.css'],
                dest: '../css/',
                ext: '.min.css'
            }
        },
        ts: { // roda o typescript
            default : {
                tsconfig: true,
                options: {
                    verbose: true
                }
            }
        },
        browserify: { // roda o browserify - concatena os modulos js
           'js/js/app.js': ['js/js/main.js']
        },
        uglify: { // roda o uglify - comprime os arquivos js
            options: {
                mangle: false,
                beautify : {
                    beautify: false,
                    ascii_only: true,
                    quote_keys: true
                }
            },
            my_target: {
                files: {
                    '../js/app.min.js': ['js/js/app.js']
                }
            }
        },
        watch: { // assiste updates nos arquivos especificados
            files: ['css/**/*', 'js/**/*'],
            tasks: ['wm-app']
        }
    });

    // carrega as tasks
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-file-creator');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // registra tasks personalizadas
    grunt.registerTask('wm-mkd', ['mkdir:all', 'file-creator:basic', 'copy']);
    grunt.registerTask('wm-app', ['compass:dev', 'cssmin:minify', 'ts', 'browserify', 'uglify']);
}