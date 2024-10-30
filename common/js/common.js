$(()=>{
    console.log('common.js');

    /* 질문 버튼 클릭 이벤트 */
    $('.question-list-area .list-box a').click(function(e){
        e.preventDefault();

        if(!$(this).hasClass('active')){
            /* 클릭한 요소에 active가 없으면 */
            $('.question-list-area .list-box a').removeClass('active');
            $(this).addClass('active');
        }else{
            /* 클릭한 요소에 active가 있으면 */
        }
    });
});



/* scroll smooth func */
const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);