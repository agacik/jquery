'use strict';
var paragraf = document.getElementById('copy');
var btnCopy = document.getElementById('btn-copy');
var output = document.getElementById('output');
var btnPaste = document.getElementById('btn-output');
var txt = "";

btnCopy.addEventListener('click', function(){
    txt = paragraf.innerHTML;
    console.log(txt);
})

btnPaste.addEventListener('click', function(){
    if( txt == ""){
       output.innerHTML = 'Skopiuj text';
       }
       else {
       output.innerHTML = txt;
       }
    

})
