$(()=>{
    console.log('loading.js');

    $('.button-area.next').click(function(e){
        e.preventDefault();
        $('.loading-screen-box').addClass('visible');

        setTimeout(function(){
            window.location.href = '../scenario/';
        }, 4000);
    });
});