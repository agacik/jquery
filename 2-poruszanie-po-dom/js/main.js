'use strict';

$(function() {

    $('p').eq(1).css({'background-color': 'green',});
    
    
    $('p').each(function (i) {
        $(this).addClass("paragraf-" + (i + 1));
        
    })
//    console.log($('#first').text());
// 
//    console.log($('#first').text("To jest nowy text w paragrafie").text());
//    
//    $('#second').html(' <b>Inny paragraf</b> ').append('Text na koniec').prepend("Text na początku").after('<p>Paragraf</p>');
//    
//    $('h1').find('strong').remove();
//    
//    $('p').css({'font-size': '30px', 'color': 'red',});
//    
//    $('h1').addClass('blue');
    
    
    
});