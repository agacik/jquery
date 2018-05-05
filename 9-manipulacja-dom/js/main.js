'use strict';

var output = document.getElementById('output');
var input = document.getElementsByTagName('input')[0];
var btn = document.querySelector("#btn");

btn.addEventListener('click', function(event){
    event.preventDefault();
    var color = input.value;
    output.style.backgroundColor = color;
    output.innerHTML = 'background-color: ' + color;
    
})


//var btnPaste = document.getElementById('btn-output');
//var txt = "";
//
//btnCopy.addEventListener('click', function(){
//    txt = paragraf.innerHTML;
//    console.log(txt);
//})
//
//btnPaste.addEventListener('click', function(){
//    if( txt == ""){
//       output.innerHTML = 'Skopiuj text';
//       }
//       else {
//       output.innerHTML = txt;
//       }
//})
