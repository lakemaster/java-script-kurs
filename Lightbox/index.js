"use strict";

jQuery(document).ready(function($) {
    /*
        <div id="overlay"></div>
        <div id="overlay-container">
            <img id="overlay-image" src="./img/big/bild4.jpg" />
        </div>
        */
    
    $(document).keydown(function(event) {
        if (event.key == "Escape") {
            $("#overlay").remove();
            $("#overlay-container").remove();
        }
    });

    $(".gallery-item").click(function(event) {
        event.preventDefault();

        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img id='overlay-image'></img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);
        
        let container = $.parseHTML("<div id='overlay-container'></div>");
        $(container).click(function() {
            $("#overlay").remove();
            $("#overlay-container").remove();
        });
        $(container).append(image);
        

        $("body").append(container);

    });

});