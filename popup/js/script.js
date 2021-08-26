$(document).ready(function() {
    var closeBtn = $('.close-btn'), 
        popup = $('.popup'), 
        openBtn = $('button[data-popup="true"]'),
        overlay = $('.overlay');

        openBtn.on('click', function(){
            overlay.show();
            popup.show();
        });
        closeBtn.click(function() {
            overlay.hide();
            popup.hide();
        });

});