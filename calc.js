
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

let operationsBtn = document.getElementsByClassName("operationsBtn");

for (let i = 0; i < operationsBtn.length; i++) {
    operationsBtn[i].addEventListener('click', onOperationButtonClick);
}

function makeOperation(operationCode) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    if (operationCode === "+") {
        let result = number1 + number2;
        alert(result);
    } else if (operationCode === "-") {
        let result = number1 - number2;
        alert(result);
    } else if (operationCode === "*") {
        let result = number1 * number2;
        alert(result);
    } else if (operationCode === "/") {
        let result = number1 / number2;
        alert(result);
    } else {
        alert("Операция неизвестна!");
    }
}

function onOperationButtonClick(event) {
    let operationButton = event.currentTarget;
    let arg = operationButton.innerHTML;
    makeOperation(arg);
}
