//#region CONSTS - ELEMENTOS DO DOM
//-------------------------CONSTANTES---------------------------------
const $buttons = document.querySelectorAll(".calc-button");
const $display = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $clear = document.querySelector(".clear-button");
const $operations = document.querySelectorAll(".operation-button");
const $equal = document.querySelector(".calc-button-equal");
const $signal = document.querySelector(".signal-button");
const $percent = document.querySelector(".percent-button");
const $callback = document.querySelector(".calculator__display-history");
const $closeCallback = document.querySelector(".calculator__callback__close-button");
const $callbackWindow = document.querySelector(".calculator__callback");
const $callbackOperation = document.querySelector(".calculator__callback__operation")
const $callbackResult = document.querySelector(".calculator__callback__result");
//#endregion
//#region VARIÁVEIS
let n1 = "";
let n2 = "";
let operation = false;
let previous = "";
let firstSignal = false;
let callbackResult = "";
let callbackOperation = "";
//#endregion
//#region FUNÇÕES
function result() {
  if (operation) {
    callbackOperation = (n1 + " " + previous + " " + n2);
    if (previous == "+") {
      n1 = Number(n1) + Number(n2);
    }
    if (previous == "-") {
      n1 = Number(n1) - Number(n2);
    }
    if (previous == "÷") {
      n1 = Number(n1) / Number(n2);
    }
    if (previous == "×") {
      n1 = Number(n1) * Number(n2);
    }
    callbackResult = n1
    operation = false;
    n2 = "";
  }
}

function displayResult(){
  result();
  $result.textContent = n1;
  $display.value = n1;
}
//#endregion
//#region BOTÕES
//BOTÃO CLEAR (limpa toda a calculadora)
$clear.addEventListener("click", function () {
  $display.value = "";
  $result.textContent = 0;
  //lembrar de zerar TODAS as variáveis
  n1 = "";
  n2 = "";
  operation = false;
  previous = "";
  firstSignal = false;
});

//BOTÕES DE NÚMERO
$buttons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    if (!operation) {
      n1 = n1 + $button.textContent;
    } else {
      n2 = n2 + $button.textContent;
    }
    $display.value = $display.value + $button.textContent;
  });
});

//BOTÕES DE OPERAÇÃO
$operations.forEach(function ($button) {
  $button.addEventListener("click", function () {
    displayResult();
    previous = $button.textContent;
    operation = !operation;
    $display.value = $display.value + $button.textContent;
  });
});

//BOTÃO DE IGUALDADE
$equal.addEventListener("click", function () {
  displayResult();
});

//BOTÃO DE PORCENTAGEM
$percent.addEventListener("click", function () {
  result();
  n1 = n1/100;
  displayResult();
});

//BOTÃO DE TROCA DE SINAL
$signal.addEventListener("click", function () {
  if (!firstSignal) {
    n1 = -n1;
    $result.textContent = n1;
    $display.value = n1;
    firstSignal = true;
  }
  n2 = -n2;
  displayResult();
});

//BOTÃO DE HISTÓRICO
$callback.addEventListener("click", function(){
  $callbackWindow.classList.toggle('closed');
  $callbackOperation.textContent = callbackOperation;
  $callbackResult.textContent = callbackResult;
  });

//BOTÃO DE FECHAR O HISTÓRICO
$closeCallback.addEventListener("click", function(){
  $callbackWindow.classList.toggle('closed');
});
//#endregion