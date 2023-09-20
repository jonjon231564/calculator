

document.addEventListener("DOMContentLoaded", function() {
    let sevenButton = document.querySelector(".btn-7");
    let fourButton = document.querySelector(".btn-4");
    let oneButton = document.querySelector(".btn-1");
    let zeroButton = document.querySelector(".btn-0");
    let eightButton = document.querySelector(".btn-8");
    let fiveButton = document.querySelector(".btn-5");
    let twoButton = document.querySelector(".btn-2");
    let clearButton = document.querySelector(".btn-clear");
    let nineButton = document.querySelector(".btn-9");
    let sixButton = document.querySelector(".btn-6");
    let threeButton = document.querySelector(".btn-3");
    let equalButton = document.querySelector(".btn-equal");
    let divideButton = document.querySelector(".btn-divide");
    let multiplyButton = document.querySelector(".btn-multiply");
    let plusButton = document.querySelector(".btn-add"); // Fix the class name
    let subtractButton = document.querySelector(".btn-subtract");

    let display = document.querySelector(".display")

    

    let pushNumberOne = ""
    let pushNumberTwo = ""

    let firstNumber = ""
    let operand = ""
    let secondNumber = ""
    let answer;


    oneButton.addEventListener("click", function () {
        
        display.textContent += "1"; 
        
    });
    twoButton.addEventListener("click", function () {
        
        display.textContent += "2"; 
    });
    threeButton.addEventListener("click", function () {
        
        display.textContent += "3"; 
    });
    fourButton.addEventListener("click", function () {
        
        display.textContent += "4"; 
    });
    fiveButton.addEventListener("click", function () {
        
        display.textContent += "5"; 
    });
    sixButton.addEventListener("click", function () {
        
        display.textContent += "6"; 
    });
    sevenButton.addEventListener("click", function () {
        
        display.textContent += "7"; 
    });
    eightButton.addEventListener("click", function () {
        
        display.textContent += "8"; 
    });
    nineButton.addEventListener("click", function () {
        
        display.textContent += "9"; 
    });
    equalButton.addEventListener("click", function () {
        pushNumberTwo = display.textContent
        let equation = pushNumberOne + operand + pushNumberTwo;
        console.log(equation)
        
        pushNumberTwo = parseInt(pushNumberTwo);
        pushNumberOne = parseInt(pushNumberOne);
        if (operand === "*"){
            answer = pushNumberOne * pushNumberTwo
        }
        else if (operand === "-"){
            answer = pushNumberOne - pushNumberTwo
        }
        else if (operand === "+"){
            answer = pushNumberOne + pushNumberTwo
        }
        else if (operand === "/"){
            answer = pushNumberOne / pushNumberTwo
        }

        display.textContent = answer
    })
    divideButton.addEventListener("click", function () {
        
        pushNumberOne = display.textContent;
        display.textContent = ""
        operand = "/"
    });
    multiplyButton.addEventListener("click", function () {
        pushNumberOne = display.textContent;
        display.textContent = ""
        operand = "*"
    });
    plusButton.addEventListener("click", function () {
        pushNumberOne = display.textContent;
        display.textContent = ""
        operand = "+"
    });
    subtractButton.addEventListener("click", function () {
        
        pushNumberOne = display.textContent;
        display.textContent = ""
        operand = "-"

    });
    zeroButton.addEventListener("click", function () {
        
        display.textContent += "0"; 
    });
    clearButton.addEventListener("click", function () {
        
        display.textContent = ""; 
        equation = ""

        pushNumberOne = ""
        pushNumberTwo = ""

        firstNumber = ""
        operand = ""
        secondNumber = ""
        
    });
    
    

});