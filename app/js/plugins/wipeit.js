define(['jquery','TimelineMax','TweenMax','ScrollMagic','ScrollMagicAnimation','ScrollMagicDebug'], function($,TimelineMax,TweenMax,ScrollMagic) {
   
   function efectWipeit(){

        // init the controller
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onLeave"
            }
        });
    
        // wipeIt efect
        var tween = new TimelineMax()
            // panel wipe first
            .add(TweenMax.to(".wipe1", 1, {transform: "translateY(0)"}))

            // panel wipe second
            .add(TweenMax.to(".wipe2", 1, {transform: "translateY(0)"}))

            // panel wipe third
            .add(TweenMax.to(".wipe3", 1, {transform: "translateY(0)"}))

            // panel wipe fourth
            .add(TweenMax.to(".wipe4", 1, {transform: "translateY(0)"}));

        // panel section pin
        new ScrollMagic.Scene({
                triggerElement: "#pin",
                duration: 500
            })
        .setPin("#pin")
        .setTween(tween)
        .addTo(controller);
    };

    return {
        efectWipeit: efectWipeit
    };
});

