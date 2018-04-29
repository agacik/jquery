'use strict';

$(function() {

//    $( '#first' )
//    .css( { 'color' : 'red', 
//           'background-color' : 'pink', 
//           'font-size': '30px',
//          } )
//    .hide( 'slow' )
//    .show( 3000 );
    
    console.log($('#first').text());
 
    console.log($('#first').text("To jest nowy text w paragrafie").text());
    
    $('#second').html(' <b>Inny paragraf</b> ').append('Text na koniec').prepend("Text na początku").after('<p>Paragraf</p>');
    
    $('h1').find('strong').remove();
    
    $('p').css({'font-size': '30px', 'color': 'red',});
    
    $('h1').addClass('blue');
    
    
    
});