//tab
$(function () {
    $('.tab-control .tab').click(function () {
        $('.tab-control .tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        let dataId = $(this).attr('data-tab'); 
        $('.tab-text').removeClass('active-tab');
        $(dataId).addClass('active-tab');
    });
});

//progress-bar
$(function(){
    var owl  = $('.object-types .owl-carousel');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function(event) {
        var page = event.page.index + 1;
        var item = (100 / event.item.count);
        var progressBar = $('.progress span');
        var result = parseInt((page)  * (item));
        $(progressBar).css('max-width', result + '%');
    });
    owl.on('resized.owl.carousel', function(event){
        owl.trigger('to.owl.carousel', [0, 400]);
    });
});

//mobile-menu
$(function () {
    $('.mobile-menu').click(function () {
        $('body').toggleClass('menu-open');
    });
});

//accordion
$(function (){
    $('.answer__content').hide();

    $('.questions__content').click(function (){
        $(this).parent().toggleClass('active-el');
        $('.info__block').not($(this).parent()).removeClass('active-el');
        $('.answer__content').each(function (){
            $(this).slideUp();
        });
        if(!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });
});