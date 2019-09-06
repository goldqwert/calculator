let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');
let multButton = document.getElementById('multButton');
let devButton = document.getElementById('devButton');
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function getNumber1() {
    return +input1.value;
}

function getNumber2 () {
    return +input2.value;
}

function makeOperation(operationCode) {
    if (operationCode === "+") {
        let result = getNumber1() + getNumber2 ();
        alert(result);
    } else if (operationCode === "-") {
        let result = getNumber1() - getNumber2 ();
        alert(result);
    } else if (operationCode === "*") {
        let result = getNumber1() * getNumber2();
        alert(result);
    } else if (operationCode === "/") {
        let result = getNumber1() / getNumber2();
        alert(result);
    } else {
        alert("Операция неизвестна!");
    }
}

function onButtonPlusClick() {
    makeOperation("+");
}
function onButtonMinusClick() {
    makeOperation("-");
}

function onButtonMultiplyClick() {
    makeOperation("*");
}

function onButtonDevideClick()  {
    makeOperation("/");
}


plusButton.addEventListener('click', onButtonPlusClick);
minusButton.addEventListener('click', onButtonMinusClick);
multButton.addEventListener('click', onButtonMultiplyClick);
devButton.addEventListener('click', onButtonDevideClick );