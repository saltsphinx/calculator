function add(num, num1) {
    return +num + +num1
}

function subtract(num, num1) {
    return +num - +num1
}

function multiply(num, num1) {
    return +num * +num1
}

function divide(num, num1) {
    return +num / +num1
}

function operate(num, num1, op) {
    let returnResult;
    op === '+' ? returnResult = add(num, num1) :
    op === '-' ? returnResult = subtract(num, num1) :
    op === '*' ? returnResult = multiply(num, num1) :
    op === '/' ? returnResult = divide(num, num1) : false;
    return returnResult;
}

const numberButtons = document.querySelectorAll(`.number-button`)
const operationButtons = document.querySelectorAll(`.operation-button`)
const clearButton = document.querySelector(`.clear-button`)
const declareButton = document.querySelector(`.declare-button`)
const calculatorScreen = document.querySelector(`.calculator-screen`)

let currentInput = ''
let numberArray = [];
let operationArray = [];

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', e => {
        const inputStr = e.target.textContent
        currentInput += inputStr
        calculatorScreen.textContent = currentInput;
    })
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', e => {
        const inputStr = e.target.textContent
        if (inputStr === '.') checkPeriod();
        operationArrayHandler(inputStr)
    })
}

function currentInputHandler() {
    numberArray.push(currentInput)
    currentInput = ''
}

function checkPeriod() {
    if (currentInput.indexOf('.')){
        return
    }
    currentInput += '.'
}

function clearInput() {
    currentInput = ''
    console.log('pushed')
}

function operationArrayHandler(str) {
    if (currentInput) {
        currentInputHandler()
        if (numberArray.length > 0) {
            console.log('here')
            if (operationArray.length + 1 <= numberArray.length) {
                operationArray.push(str)
            }
        }
    } else console.log('no');
}

// function calculate() {
//     const operationAmount = operationArray.length
//     let i = 0;
//     const calculation = operationArray.reduce((total, operationArray) => {
//         const product = operate(+numberArray[0], +numberArray[1], operationArray[0])
//         console.log(`${numberArray[0]} ${operationArray[i]} ${numberArray[1]} = ${product}`)
//         numberArray.shift()
//         numberArray.shift()
//         numberArray.unshift(product)
//         return product
//     }, 0)
//     clearInputs()
//     calculatorScreen.textContent = calculation
// }

function calculate() {
    const operationAmount = operationArray.length
    let i = 0;
    const calculation = operationArray.reduce((total, operationArray) => {
        let firstNum;
        if (total) {
            firstNum = total
        } else {
            firstNum = +numberArray[0]
            numberArray.shift()
        }
        const product = operate(firstNum, +numberArray[0], operationArray[0])
        console.log(`${firstNum} ${operationArray[i]} ${numberArray[0]} = ${product}`)
        numberArray.shift()
        return product
    }, 0)
    clearInputs()
    calculatorScreen.textContent = calculation
}

clearButton.addEventListener('click', clearInputs)

function clearInputs() {
    currentInput = ''
    numberArray = []
    operationArray = []
    calculatorScreen.textContent = '|';
}

declareButton.addEventListener('click', () => {
    if (numberArray.length >=1 && operationArray.length >=1) {
        if (currentInput) {
            if (currentInput) numberArray.push(currentInput);
            clearInput()
            console.log('current input')
            if (operationArray.length === numberArray.length - 1) {
                console.log('first')
                calculate()
            } else {
                if (operationArray.length - 1 === numberArray.length - 1) operationArray.pop();
                if (operationArray.length === numberArray.length - 1) {
                    console.log('op pop?')
                    calculate()
                } else {
                    console.log(`First number array: ${numberArray}. operation array" ${operationArray}`)
                }
            }
        }
        else if (operationArray.length === numberArray.length - 1) {
            console.log('second')
            calculate()
        } 
        else {
            console.log(`Second number array: ${numberArray}. operation array" ${operationArray}`)
        }
    }
})

function checkit() {
    console.log(currentInput)
    console.log(numberArray)
    console.log(operationArray)
}