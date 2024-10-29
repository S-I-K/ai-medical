$(()=>{
    /* QA 배경이미지 인트로 애니메이션 */
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.ob-box.left', {
        x: '-57%',
    },{
        x: '0%',
        duration: 2,
        ease: "bounce.out",
    });
    gsap.fromTo('.ob-box.right', {
        x: '30%',
    },{
        x: '0%',
        duration: 2,
        ease: "bounce.out",
    });


    /* QA 콘텐츠 인트로 애니메이션 */
    gsap.fromTo('section', {
        opacity: 0,
    },{
        opacity: 1,
        duration: .6,
        delay: 1.4,
    });
});