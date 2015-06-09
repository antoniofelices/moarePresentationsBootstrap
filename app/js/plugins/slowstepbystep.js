/*
 *
 * Slow step by step
 * 
 *
*/

define(['jquery','TimelineMax','TweenMax','ScrollMagic','ScrollMagicAnimation'], function($,TimelineMax,TweenMax,ScrollMagic) { 
    
    function efectSlowStepByStep(){

        // Variables
        var step01 = $('miSelector01');
        var step02 = $('miSelector02');
        var step03 = $('miSelector03');
        var step04 = $('miSelector04');
        var step05 = $('miSelector05');

        // Init the controller
        var controller = new ScrollMagic.Controller({
        });
    
        // Step by step efect
        var tweenStep = new TimelineMax()
            
            .add(TweenMax.from(step01, .18, {opacity:0.3,ease:Power3.easeInOut}))
            .add(TweenMax.from(step02, .18, {opacity:0.3,ease:Power3.easeInOut}))
            .add(TweenMax.from(step03, .18, {opacity:0.3,ease:Power3.easeInOut}))
            .add(TweenMax.from(step04, .18, {opacity:0.3,ease:Power3.easeInOut}))
            .add(TweenMax.from(step05, .18, {opacity:0.3,ease:Power3.easeInOut}));

        // Scene
        new ScrollMagic.Scene({
                triggerElement: "miDisparador",
                triggerHook: 0.95
            })
        .setTween(tweenStep)
        .addTo(controller);
    };

    return {
        efectSlowStepByStep: efectSlowStepByStep
    };
});