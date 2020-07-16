"use strict";

jQuery.fn.lightbox = function() {
    $(document).keydown(function(event) {
        if (event.key == "Escape") {
            $("#lightbox__overlay").remove();
            $("#lightbox__overlay-container").remove();
        }
    });
    $(this).click(function(event) {
        event.preventDefault();

        let overlay = $.parseHTML("<div id='lightbox__overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img id='lightbox__overlay-image'></img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);
        
        let container = $.parseHTML("<div id='lightbox__overlay-container'></div>");
        $(container).click(function() {
            $("#lightbox__overlay").remove();
            $("#lightbox__overlay-container").remove();
        });
        $(container).append(image);
        $("body").append(container);
    });
    return this;
}