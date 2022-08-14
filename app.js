function Add(a,b) {
let sum = Number(a) + Number(b);
return sum
}

// console.log(Add(1,2))

function Subtract(a,b) {
    let sum = a - b;
    return sum
}

// console.log(Subtract(5,1))

function Multiply(a,b) {
    let sum = a * b;
    return sum
}

// console.log(Multiply(3,3))

function Divide(a,b) {
    let sum = a/b;
    return sum
}

// console.log(Divide(10,2))



//operate function//
function Operate(operation,firstNum,secondNum) {
if (operation === Add) {
    return Add(firstNum,secondNum);
} else if (operation === Subtract) {
    return Subtract(firstNum,secondNum);
} else if (operation === Multiply) {
    return Multiply(firstNum,secondNum);
} else if (operation = Divide) {
    return Divide(firstNum,secondNum);
} else {
    alert("Not Valid");
}
}

//this appends the numbers and operations into the display//
const buttons = document.querySelectorAll("button#input.button");
const display = document.getElementById("display");
const buttonClear = document.querySelectorAll("button.buttonClear");
const addButton = document.querySelectorAll("button#operator.buttonAdd");
const subtractButton = document.querySelectorAll("button#operator.buttonSubtract");
const multiplyButton = document.querySelectorAll("button#operator.buttonMultiply");
const divideButton = document.querySelectorAll("button#operator.buttonDivide");
const equalsButton = document.querySelectorAll("button#operator.buttonEquals");
const negativeButton = document.querySelectorAll("button#operator.buttonNegative");

//displays button pressed onto the display//
buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        let input = document.createElement("div");
        input.textContent = e.target.textContent;
        display.appendChild(input);
    })
});

//equation object//
const equation = {
    firstNum: "",
    secondNum: "",
    operation: "",
}
//clears display//
function clearDisplay() {
    while (display.firstChild) {
        display.replaceChildren();
    }
}

buttonClear.forEach(e=> e.addEventListener("click",function(e) {
    clearDisplay();
    equation.firstNum = "";
    equation.secondNum = "";
    equation.operation = "";
    console.log(equation);
}))


//function for when addition is pressed//
//if else function is to track if more than one operation is being done at once//
function addOperator() {
    if(equation.firstNum == "" && equation.secondNum == "" && equation.operation == "") {
    equation.firstNum = display.textContent;
    equation.operation = Add;
    console.log(equation)
    } else if (equation.firstNum !== "" && equation.operation !== "") {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    console.log(equation);
    }else if(equation.firstNum !== "") {
    equation.operation = Add;
    console.log(equation);
    } else {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.operation = Add;
    console.log(equation);
    }
}

addButton.forEach((button) => {
    button.addEventListener("click", function(e){
        addOperator();
        clearDisplay();
    })
})

//function for when subtraction is pressed//
function subtractOperator() {
    if(equation.firstNum == "" && equation.secondNum == "" && equation.operation == "") {
    equation.firstNum = display.textContent;
    equation.operation = Subtract;
    console.log(equation)
    } else if (equation.firstNum !== "" && equation.operation !== "") {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    console.log(equation);
    } else if(equation.firstNum !== "") {
    equation.operation = Subtract;
    console.log(equation);
    } else {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.operation = Subtract;
    console.log(equation);
    }
}

subtractButton.forEach((button) => {
    button.addEventListener("click", function(e){
        subtractOperator();
        clearDisplay();
    })
})

//function for when multiply is pressed//
function multiplyOperator() {
    if(equation.firstNum == "" && equation.secondNum == "" && equation.operation == "") {
    equation.firstNum = display.textContent;
    equation.operation = Multiply;
    console.log(equation)
    } else if (equation.firstNum !== "" && equation.operation !== "") {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    console.log(equation);
    } else if(equation.firstNum !== "") {
    equation.operation = Multiply;
    console.log(equation);
    } else {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.operation = Multiply;
    console.log(equation);
    }
}

multiplyButton.forEach((button) => {
    button.addEventListener("click", function(e){
        multiplyOperator();
        clearDisplay();
    })
})

//function for when divide is pressed//
function divideOperator() {
    if(equation.firstNum == "" && equation.secondNum == "" && equation.operation == "") {
    equation.firstNum = display.textContent;
    equation.operation = Divide;
    console.log(equation)
    } else if (equation.firstNum !== "" && equation.operation !== "") {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    console.log(equation);
    } else if(equation.firstNum !== "") {
    equation.operation = Divide;
    console.log(equation);
    } else {
    equation.secondNum = display.textContent;
    Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.operation = Divide;
    console.log(equation);
    }
}

divideButton.forEach((button) => {
    button.addEventListener("click", function(e){
        divideOperator();
        clearDisplay();
    })
})

//function for when equals is pressed//
function equalsOperator() {
    equation.secondNum = display.textContent;
    display.textContent = Operate(equation.operation,equation.firstNum,equation.secondNum);
    equation.firstNum = display.textContent;
    console.log(equation);
}

equalsButton.forEach((button) => {
    button.addEventListener("click", function(e){
        equalsOperator();
        equation.secondNum = "";
        equation.operation = "";
        console.log(equation);
    })
})

function negativeOperator() {
    display.textContent = -1 * display.textContent;
}

negativeButton.forEach((button) => {
    button.addEventListener("click", function(e){
        negativeOperator();
    })
})