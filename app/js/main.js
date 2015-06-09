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
        
        /* Custom, activar el que voy a usar. Tiene que ir en concordancia con las llamadas require de abajo */
        //slowlink: 'plugins/slowlink',
        //slowshow: 'plugins/slowshow',
        //slowstepbystep: 'plugins/slowstepbystep'
        //wipeit: 'plugins/wipeit'
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

/* Custom, activar el que voy a usar. Se pueden juntar 
// Bootstrap
require(['jquery', 'bootstrap'], function($, bootstrap) {
});

// Bootstrap y Slow link efect
require(['jquery', 'bootstrap', 'slowlink'], function($, bootstrap, slowlink) {
    slowlink.efectSlowLink();
});

// Bootstrap y Slow show efect
require(['jquery', 'bootstrap', 'TweenLite', 'TimelineMax', 'TweenMax', 'ScrollMagic', 'slowshow'], function($, bootstrap, TweenLite,TimelineMax, TweenMax, ScrollMagic, slowshow) {
    slowshow.efectSlowShow();
});

// Bootstrap y Show step by step efect
require(['jquery', 'bootstrap', 'TweenLite', 'TimelineMax', 'TweenMax', 'ScrollMagic', 'slowstepbystep'], function($, bootstrap, TweenLite,TimelineMax, TweenMax, ScrollMagic, slowstepbystep) {
    slowstepbystep.efectSlowStepByStep();
});

// Bootstrap, Wipeit Efect, require GSAP, ScrollMagic and wipeit file
require(['jquery','bootstrap','TweenLite','TimelineMax','TweenMax','ScrollMagic','wipeit'], function($, bootstrap, TweenLite, TimelineMax, TweenMax,ScrollMagic, wipeit){
    wipeit.efectWipeit();
});
*/