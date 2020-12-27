// Hookup
const display = document.querySelector("input");
const keys = document.querySelector(".keys");
const buffer = [];

function equal() {
    if(buffer && buffer.length){
        buffer.push(parseFloat(display.value));
        display.value = evaluate(buffer);
    }
}

function number(target) {
    display.value =
        display.value !== "0"
            ? display.value + target.innerText
            : target.innerText;
}

function operation(target) {
    let operationName = target.getAttribute("op");
    let currentValue = parseFloat(display.value);

    if (operationName == "clear") {
        display.value = "";
        buffer.length = 0;
    } else if (operationName == "negate") {
        display.value = -currentValue;
    } else if (operationName == "percent") {
        display.value = currentValue * 0.01;
    } else {
        if (buffer && buffer.length) {
            buffer.push(currentValue);
            const result = evaluate(buffer);

            buffer.push(result);
            buffer.push(operationName);

            display.value = "";
        } else {
            buffer.push(currentValue);
            buffer.push(operationName);
            display.value = "";
        }
    }
}

const evaluate = (buffer) => {
    const secondOperand = buffer.pop();
    const operator = buffer.pop();
    const firstOperand = buffer.pop();

    switch (operator) {
        case "add":
            return firstOperand + secondOperand;
            break;
        case "subtract":
            return firstOperand - secondOperand;
            break;
        case "multiply":
            return firstOperand * secondOperand;
            break;
        case "divide":
            return firstOperand / secondOperand;
            break;
        default:
            return secondOperand;
    }
};

keys.addEventListener("click", (e) => {
    let target = e.target;
    if (target.className == "eq__key") {
        equal();
    } else if (target.className == "num__key") {
        number(target);
    } else if (target.className == "op__key") {
        operation(target);
    }
});
