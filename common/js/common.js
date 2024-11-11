$(()=>{
    console.log('common.js');


    /* ============================
        Q&A.JS
    ============================ */

    /* Q&A: 리스트 선택 */
    $('.question-list-area .list-box a.button-box').click(function(e){
        e.preventDefault();

        if(!$(this).hasClass('active')){
            /* 클릭한 요소에 active가 없으면 */
            $('.question-list-area .list-box a.button-box').removeClass('active');
            $(this).addClass('active');
        }else{
            /* 클릭한 요소에 active가 있으면 */
        }
    });

    /* Q&A: 페이징 버튼 */
    $('.question-list-area .list-box a.button-box').click(function(e){
        /* paging button */
        $next_paging_button = $('.paging-button-content-wrap.qna .paging-button-box .button-area.next');
        /* paging button text  */
        $next_paging_button_text = $next_paging_button.find('span');

        if($(this).hasClass('start')) {
            $next_paging_button.addClass('start');
            $next_paging_button_text.html('학습시작');
        } else {
            $next_paging_button.removeClass('start');
            $next_paging_button_text.html('다음으로');
        }
    });

    /* Q&A: 배경 이미지 밖에서 들어오는. */
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.bg-area.in .ob-box.left', {
        x: '-62%',
    },{
        x: '0%',
        duration: 2,
        ease: "bounce.out",
    });
    gsap.fromTo('.bg-area.in .ob-box.right', {
        x: '43%',
    },{
        x: '0%',
        duration: 2,
        ease: "bounce.out",
    });

    /* Q&A: 배경 이미지 안에서 밖으로 나가는. */
    gsap.fromTo('.bg-area.out .ob-box.left', {
        x: '0%',
    },{
        x: '-62%',
        duration: 2,
        ease: "bounce.out",
    });
    gsap.fromTo('.bg-area.out .ob-box.right', {
        x: '0%',
    },{
        x: '43%',
        duration: 2,
        ease: "bounce.out",
    });

    /* Q&A: 컨텐츠 안보였다가 보여지게. */
    gsap.fromTo('.qna-fade', {
        opacity: 0,
    },{
        opacity: 1,
        duration: .6,
        delay: 1.4,
    });




    /* ============================
        LOADING.JS
    ============================ */

    /* Q&A: 로딩 스크린 화면에 나타남 */
    $('.paging-button-content-wrap.qna .paging-button-box .button-area.next').click(function(e){
        if($(this).hasClass('start')) {
            e.preventDefault();
            /* 로딩 스크린 클래스 추가 */
            $('.loading-screen-box').addClass('visible');

            /* n초 뒤에 페이지 이동 */
            setTimeout(function(){
                window.location.href = '../learning/people-03.html';
            }, 4000);
        } else {
        }
    });

    /* LOGIN: 로딩 스크린 화면에 나타남 */
    $('.login-form-box button.login').click(function(e){
        if($(this).hasClass('start')) {
            e.preventDefault();
            /* 로딩 스크린 클래스 추가 */
            $('.loading-screen-box').addClass('visible');
            $('.loading-screen-box').css({
                'pointer-events': 'inherit',
            });

        } else {
        }
    });

    console.log($('.login-form-box button.login'));




    /* ============================
        LEARNING.JS
    ============================ */

    /* 통역 학습 페이지 가이드 검정 스크린 페이드 */
    gsap.fromTo('.guide-screen-box', {
        opacity: 0,
    },{
        opacity: 1,
        duration: .6,
        delay: 2,
        onComplete: () => {
            $('.message-content-wrap.trans').addClass("guide");
            $('.message-content-wrap.trans .button-box.sst').addClass("focus");
        }
    });

    /* setTimeout(function() {
        $('.guide-screen-box').css({
            'opacity': '0',
        })
    }, 4000); */



    /* ============================
        LEARNING.js
    ============================ */

    /* 녹음버튼 클릭 시 툴팁 메세지 변경 */
    $('.button-box.sst').click(function(e){
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('.tooltip-box span').html('녹음 중단하기');
            $('.guide-text-box > p').html('답변을 다 하셨다면 마이크 버튼을 다시 눌러 녹음을 종료해주세요.');
        } else {
            $(this).removeClass('active');
            $(this).find('.tooltip-box span').html('녹음 시작하기');
            $('.guide-text-box > p').html('마이크 버튼을 클릭하여 음성으로 통역 메세지를 전달해보세요.');
        }
    });

});




/* 딱딱한 스크롤링 부드럽게 해주시잖아 */
const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);