function Add(a,b) {
let sum = a + b;
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

console.log(Operate(Subtract,5,1))