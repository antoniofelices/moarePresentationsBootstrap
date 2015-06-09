/*
 *
 * Slow show efect
 * 
 *
*/

define(['jquery','TweenLite','TimelineMax','TweenMax','ScrollMagic','ScrollMagicAnimation'], function($,TweenLite,TimelineMax,TweenMax,ScrollMagic) { 
    
    function efectSlowShow(){

        // Variables
        var circle = $('miSelector');

        // Init the controller
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onLeave"
            }
        });
    
        // Slow show efect
        var tweenDontShow = new TimelineMax()
            .add(TweenMax.from(circle, 1, {opacity:0.3,ease:Power3.easeInOut}));

        // Scene
        new ScrollMagic.Scene({
                triggerElement: "miDisparador",
                triggerHook: 0.95
            })
        .setTween(tweenDontShow)
        .addTo(controller);
    };

    return {
        efectSlowShow: efectSlowShow
    };
});
