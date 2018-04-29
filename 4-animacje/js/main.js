'use strict';

$(function() {

    
    $('button').eq(0).click(function() {
        $('#first').hide(3000).show(3000);
    });
    
    $('#btn').click(function() {
        $('h1').css({'background-color': 'green', 'color': 'red',});
        $('h1').fadeOut(3000).fadeIn(3000);
    });
    
    $('button').eq(2).click(function() {
        $('h2').slideUp(3000).slideDown(3000);
    });
    
    animatedDiv();
    
    function animatedDiv() {
    $('div')
        .animate({'width': '200px','height': '200px'}, 2000)
        .animate({'width': '100px','height': '100px'}, 2000, animatedDiv)
    }


    
//    $('p').eq(1).click(
//        function () {
//            $(this).css         
//            ({'background-color': 'green',})
//        });
//    
//    $('button').on( {
//        'mouseenter': function (){
//            $(this).css({'background-color': 'green'})
//    },
//        
//    'mouseleave': function (){
//        $(this).css({'background-color': 'blue'})
//    }
//  });
    

});