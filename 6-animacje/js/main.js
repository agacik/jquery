'use strict';
$(function() {

$('#btn-animuj').on('click', function() {
       $('#anim').animate({
           'top': '200px',
           'left': '300px',
           'width': '500px',
           'height': '350px',   
       }, 1500,function(){
           $('#anim').addClass('new_background');
           $('#anim').delay(1000).animate({
               'top': '0px',
               'left': '200px',
               'width': '100px',
               'height': '100px',    
           },3000);
       } )
    });
});