"use strict";

jQuery(document).ready(function($) {

    $("p").css("color", "green");
    $("p").css("background-color", "red");

    let p = $("p.absatz2")
        .css("border", "3px solid blue")
        .css("fontSize", "200%");

    console.log(p);

    $("p").click(function(event) {
        console.log(event);
        $(this).css("color", "orange");
    });

    $("p").mouseenter(function() {
        $(this).css("color", "green");
    });

    $("p").mouseleave(function() {
        $(this).css("color", "black");
    });

    $("p").each(function(i, element) {
        $(element).css("borderRadius", `${(i+1) * 10}px`);
    });
});