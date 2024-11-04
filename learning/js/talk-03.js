$(()=>{
    gsap.fromTo('.guide-screen-box', {
        opacity: 0,
    },{
        opacity: 1,
        duration: .6,
        delay: 2,
    });

    setTimeout(function() {
        $('.guide-screen-box').css({
            'opacity': '0',
        })
    }, 4000);
});