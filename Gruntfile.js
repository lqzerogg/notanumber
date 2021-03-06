module.exports = function(grunt) {      // Project configuration.
    grunt.initConfig({       
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.         
        meta: {
            basePath: "./", 
            srcPath: "web/public/stylesheets/sass/", 
            deployPath: "web/public/stylesheets/"
        },          
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
        // Task configuration.
        sass: {
            dist: {
                files: { 
                    "<%= meta.deployPath %>style.css": "<%= meta.srcPath %>style.scss"
                }, 
                options: { 
                    sourcemap: "true" 
                }
            }
        },
        watch: { 
            scripts: {  
                files: [ 
                    "<%= meta.srcPath %>*.scss",
                    "<%= meta.srcPath %>*/*.scss" 
                ],
                tasks: ["sass"]
            }
        }     
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    

}

