"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

jQuery(document).ready(function($) {

    let heightObj = $("#height")
    let weightObj = $("#weight");
    let result = $("#result");

    let f = function() {
        console.log(heightObj);
        let height = parseFloat(heightObj.val().replace(",", "."));
        let weight = parseFloat(weightObj.val().replace(",", "."));

        let bmi = Math.round(10 * weight / (height * height)) / 10;
        let bmi_str = ("" + bmi).replace(".", ",");

        result.text(bmi_str);
    };

    $("#height").change(f);
    $("#weight").change(f);

    //heightObj.addEventListener("change", f);
    //weightObj.addEventListener("change", f);
});