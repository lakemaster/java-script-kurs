"use strict"

window.addEventListener("load", function() {
    let f = function() {
        return document.getElementById("test").innerHTML;
    }
    console.log(f());
}, false);

