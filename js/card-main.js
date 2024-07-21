$(function(){
   $('body').on('click', '#btn-open', function(){
    
    $('body').find('.opening-card').removeClass('d-none');
    $('body').find('.opening-card').addClass('animated');
    $('body').find('.opening-card').addClass('slideOutUp');
    

    setTimeout(() => {
        $('body').find('.opening-card').addClass('d-none');
        $('body').find('.main-div').removeClass('d-none');
        $('body').find('.navbar-card').removeClass('d-none');
        $('body').find('#music-btn').trigger('click');
        AOS.refresh();  // ---  need to reinitiate after unhide
    }, 940);
   })
})