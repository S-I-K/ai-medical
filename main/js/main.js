$(()=>{
    /* gsap effect */
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.ob-box.left', {
        x: '-57%',
    },{
        x: '0%',
        duration: 2,
        ease: "bounce.out"
    });
    gsap.fromTo('.ob-box.right', {
        x: '30%',
    },{
        x: '0%',
        duration: 2,
        ease: "bounce.out"
    });
});