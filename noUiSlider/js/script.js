// var keyboardSupport = document.getElementById('range-slider');

// noUiSlider.create(keyboardSupport, {
//     start: 1100,
//     keyboardSupport: true,     
//     keyboardDefaultStep: 5,    
//     keyboardPageMultiplier: 10000,
//     tooltips:true,
//     animate: true,
//     animationDuration: 1500,
//     range: {
//         'min': 0,
//         'max': 10000
//     },
//     format: wNumb({
//         decimals: 3,
//         thousand: '.',
//         prefix: '$',

//     })
// });


// var keyboardSupportValue = document.getElementById('slider-keyboard-value');
// keyboardSupport.noUiSlider.on('update', function (values, handle) {
//     keyboardSupportValue.innerHTML = values[handle];
// });

var skipSlider = document.getElementById('range');

noUiSlider.create(skipSlider, {
    range: {
            'min' : 5,
            '7.7%'  : 20,
            '15.5%' : 80,
            '23.1%' : 150,
            '30.5%' : 250,
            '38%' : 350,
            '45.7%' : 450,
            '53.6%' : 550,
            '60.8%' : 650,
            '68.4%': 750,
            '76%' : 850,
            '83.6%' : 950,
            '91.3%' : 1000,
            'max' : 1100
    },
    snap: true,
    start: [150],
    connect: [true,false],
    pips: {
        mode: 'steps',
        values: [5, 20, 80, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1000, 1100],
        density: 15
    }
});

$(window).resize(function(){
    var width = $(window).width();
    if(width <= 767){
        skipSlider.noUiSlider.set(250);
        skipSlider.noUiSlider.updateOptions({
            range: {
                    'min' : 5,
                    '20%' : 80,
                    '40%' : 250,
                    '60%' : 550,
                    '80%' : 850,
                    'max' : 1100
            }
        });
    } else if(width <= 1360){
        skipSlider.noUiSlider.set(250);
        skipSlider.noUiSlider.updateOptions({
            range: {
                'min' : 5,
                '12%' : 80,
                '25.6%' : 250,
                '40%' : 450,
                '54.5%' : 650,
                '69%' : 850,
                '83.5%' : 950,
                'max' : 1100
            }
        });
    }else{
        skipSlider.noUiSlider.reset();
        skipSlider.noUiSlider.updateOptions({
            range: {
                'min' : 5,
            '7.7%'  : 20,
            '15.5%' : 80,
            '23.1%' : 150,
            '30.5%' : 250,
            '38%' : 350,
            '45.7%' : 450,
            '53.6%' : 550,
            '60.8%' : 650,
            '68.4%': 750,
            '76%' : 850,
            '83.6%' : 950,
            '91.3%' : 1000,
            'max' : 1100
            }
        });
    }
    skipSlider.querySelector('.noUi-pips');

skipSlider.noUiSlider.on('update', function(values) {
    var maxPos = Math.round(values);
        $(skipSlider).find('.noUi-value').removeClass('highlight');
  $('.noUi-value[data-value=' +`${maxPos}` +']' ).addClass('highlight');
});
 }).resize();
 






