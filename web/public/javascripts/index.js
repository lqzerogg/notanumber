requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/javascripts/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../index'
    },
    shim: {
        // 'underscore': {
        //     exports: '_'
        // },
        // 'backbone': {
        //     deps: ['underscore', 'jquery'],
        //     exports: 'Backbone'
        // },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'modernizr': {
            exports: 'Modernizr'
        }
    }
});
define(['modernizr', 'bootstrap', 'jquery'], function(M, B, $) {
    $(function() {        
        console.log(M);
        console.log($);
        console.log(B);
    })
});
