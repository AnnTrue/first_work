"use strict"

let firstNum = +prompt("Перед вами калькулятор, введите числа и знак для совершения операции. Первое число:");

let operation = prompt("Введите знак:");

let secondNum = +prompt("Введите второе число:");


function summ(firstNum, secondNum) {
        let result = firstNum + secondNum;
        alert(result);
    }

    function sub(firstNum, secondNum) {
        let result = firstNum - secondNum;
        alert(result);
    }

    function mul(firstNum, secondNum) {
        let result = firstNum * secondNum;
        alert(result);
    }
    function division(firstNum, secondNum) {
        let result = firstNum / secondNum;
        alert(result);
    }   

    while(operation != "+", "-", "*", "/") {
if (operation === "+") {
    alert(summ(firstNum, secondNum))
    break
}
if (operation === "-") {
    alert(sub(firstNum, secondNum));
    break
}
if (operation === "*") {
    alert(mul(firstNum, secondNum));
    break
}
if (operation === "/") {
    alert(division(firstNum, secondNum));
    break
}
alert("Вы ввели неверный знак")
    break
}

