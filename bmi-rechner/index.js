"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click",  function() {
        let heightObj = document.getElementById("height");
        let weightObj = document.getElementById("weight");

        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value.replace(",", "."));

        alert("BMI = " + weight / (height * height));
    });
});