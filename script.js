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
    const returnResult;
    op === '+' ? returnResult = add(num, num1) :
    op === '-' ? returnResult = subtract(num, num1) :
    op === '*' ? returnResult = multiply(num, num1) :
    op === '/' ? returnResult = divide(num, num1) : false;
    console.log(returnResult)
}