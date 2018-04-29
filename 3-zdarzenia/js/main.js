'use strict';

$(function() {

    $('p').eq(1).click(
        function () {
            $(this).css         
            ({'background-color': 'green',})
        });
    
    $('button').on( {
        'mouseenter': function (){
            $(this).css({'background-color': 'green'})
    },
        
    'mouseleave': function (){
        $(this).css({'background-color': 'blue'})
    }
  });
    

});