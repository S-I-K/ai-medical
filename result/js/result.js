$(()=>{
    console.log('result.js');

    /*  */
    let progress_bar = $('.progress-box .bar');
    let progress_text_good = $('.progress .numb-box span.good');
    let progress_text_bad = $('.progress .numb-box span.bad');
    let progress_target = parseInt(progress_bar.data('target'));
    let progress = 0;

    let interval = setInterval(function() {
        if(progress >= progress_target) {
            clearInterval(interval);
        } else {
            progress += 1;
            progress_bar.css({
                'width': progress + '%',
            });
            progress_text_good.text(progress + '%');
            progress_text_bad.text((100 - progress) + '%');
        }
    }, 50);
});