require.config({
    baseUrl: 'js',
    paths: {
        /* jquery */
        modernizr: 'lib/modernizr/modernizr',

        /* jquery */
        jquery: 'lib/jquery/jquery',

        /* Bootstrap */
        bootstrap: 'lib/bootstrap-sass/bootstrap',

        /* GSAP */
        TweenLite: 'lib/gsap/TweenLite',
        TweenMax: 'lib/gsap/TweenMax',
        TimelineMax: 'lib/gsap/TimelineMax',
        
        /* ScrollMagic */
        ScrollMagic: 'lib/ScrollMagic/ScrollMagic',
        ScrollMagicjquery: 'lib/ScrollMagic/plugins/jquery.ScrollMagic',
        ScrollMagicAnimation: 'lib/ScrollMagic/plugins/animation.gsap',
        ScrollMagicDebug: 'lib/ScrollMagic/plugins/debug.addIndicators',
        
        /* Custom */
        // wipeit
        wipeit: 'plugins/wipeit',
    },

    shim: {
        'bootstrap': {
            deps: [
                'jquery'
            ],
            exports: 'bootstrap'
        },
        'ScrollMagicjquery': {
            deps: [
                'ScrollMagic'
            ]
        },
        'ScrollMagicAnimation': {
            deps: [
                'ScrollMagic'
            ]
        },
        'ScrollMagicDebug': {
            deps: [
                'ScrollMagic'
            ]
        }
    }
});

/* Bootstrap */
require(['jquery', 'bootstrap'], function($, bootstrap) {
});


/* Wipeit Efect, require GSAP, ScrollMagic and wipeit file 
require(['jquery', 'TweenMax','ScrollMagic','wipeit'], function($, TweenMax, ScrollMagic, wipeit){
    wipeit.efectWipeit();
});
*/