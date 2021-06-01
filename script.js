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