const $buttons = document.querySelectorAll(".calc-button");
const $display = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $equals = document.querySelector(".calc-button-equal");
const $calculate = document.querySelector(".operations");

let finalResult = 0;
let a = '';
let calculate = "";
console.log;

$buttons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $display.value = calculate;
  });
});

$equals.addEventListener("click", function () {

});