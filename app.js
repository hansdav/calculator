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

//this appends the numbers and operations into the display//
const buttons = document.querySelectorAll("button#input.button");
const display = document.getElementById("display");
const buttonClear = document.querySelectorAll("button.buttonClear");


// function displayAdd() {
//     let inputKey = document.createElement("div");
//     display.appendChild(inputKey);
// }



buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        // let display = document.getElementById("display");
        let input = document.createElement("div");
        input.textContent = e.target.textContent;
        display.appendChild(input);
    })
});

buttonClear.forEach(e=> e.addEventListener("click",function(e) {
    while (display.firstChild) {
        display.replaceChildren();
    }
}))


// buttonClear.addEventListener("click", resetDis());

// buttonClear.addEventListener("click", function(e) {
//     alert ("hi");
    // document.getElementById("display").value="";
// })


// function resetDis() {
//     while (display.hasChildNodes()) {
//         display.removeChild(display.lastChild)
//     }
// }

// function displayAdd(e) {
//     let input = document.createElement("div");
//     input.textContent = e.target.textContent;
//     display.appendChild(input);
// }

// function displayAdd() {
//     let input = document.createElement("div");
//         input.textContent = e.target.textContent;
//         display.appendChild(input);
// }
