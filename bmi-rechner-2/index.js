"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function() {
    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");
    let result = document.getElementById("result");

    let f = function() {
        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value.replace(",", "."));

        let bmi = Math.round(10 * weight / (height * height)) / 10;
        let bmi_str = ("" + bmi).replace(".", ",");

        result.innerText = bmi_str;
    };

    heightObj.addEventListener("change", f);
    weightObj.addEventListener("change", f);
});