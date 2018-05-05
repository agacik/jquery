'use strict';
var btn = document.getElementById("wyslij");
var output = document.getElementById("output");
var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko")

btn.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(btn);
    
    output.innerHTML = "<p>imie: " + imie.value + "</p><p>nazwisko: " + nazwisko.value; + "</p>";

});

