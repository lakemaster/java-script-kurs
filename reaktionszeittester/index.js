"use strict";

window.addEventListener("load", function() {
    document.body.style.backgroundColor = "grey";

    setTimeout(function() {
        document.body.style.backgroundColor = "green";
        let start = Date.now();
        document.addEventListener("click", function() {
            let stop = Date.now();
            alert("You reaction time was: " + Math.round(1000*(stop - start)/1000) +  " ms");
            document.location.reload();
        });
    }, 4000 + 2 * Math.random());

});

   