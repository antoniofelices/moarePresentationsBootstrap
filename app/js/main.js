require.config({
    baseUrl: 'js',
    paths: {
        /* modernizr */
        modernizr: 'lib/modernizr/modernizr',

        /* jquery */
        jquery: 'lib/jquery/jquery',

        /* Bootstrap */
        bootstrap: 'lib/bootstrap-sass/bootstrap',

        /* GSAP */
        TweenLite: 'lib/gsap/TweenLite',
        TimelineMax: 'lib/gsap/TimelineMax',
        TweenMax: 'lib/gsap/TweenMax',
         
        /* ScrollMagic */
        ScrollMagic: 'lib/ScrollMagic/ScrollMagic',
        ScrollMagicjquery: 'lib/ScrollMagic/plugins/jquery.ScrollMagic',
        ScrollMagicAnimation: 'lib/ScrollMagic/plugins/animation.gsap',
        ScrollMagicDebug: 'lib/ScrollMagic/plugins/debug.addIndicators',
        
        /* Custom, activar el que voy a usar*/
        // wipeit: 'plugins/wipeit',
        // slowlink: 'plugins/slowlink',
        // slowshow: 'plugins/slowshow',
        // slowstepbystep: 'plugins/slowstepbystep'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'ScrollMagicjquery': {
            deps: ['ScrollMagic']
        },
        'ScrollMagicAnimation': {
            deps: ['ScrollMagic']
        },
        'ScrollMagicDebug': {
            deps: ['ScrollMagic']
        }
    }
});

/* Custom, activar el que voy a usar 
// Bootstrap
require(['jquery', 'bootstrap'], function($, bootstrap) {
});

// Bootstrap, Wipeit Efect, require GSAP, ScrollMagic and wipeit file
require(['jquery','bootstrap','TweenLite','TimelineMax','TweenMax','ScrollMagic','wipeit'], function($,bootstrap,TweenLite,TimelineMax,TweenMax,ScrollMagic,wipeit){
    wipeit.efectWipeit();
});

// Bootstrap, slowlink
require(['jquery','bootstrap','TweenLite','TimelineMax','TweenMax','ScrollMagic', 'slowlink', 'slowshow', 'slowstepbystep'], function($,bootstrap,TweenLite,TimelineMax,TweenMax,ScrollMagic,slowlink,slowshow,slowstepbystep) {
    slowlink.efectSlowLink();
    slowshow.efectSlowShow();
    slowstepbystep.efectSlowStepByStep();
});
*/