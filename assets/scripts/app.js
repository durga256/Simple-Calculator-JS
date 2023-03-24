let currentResult = 0;
let calculationDescription = '';
let logEntries = [];

function writeToLog(
    op, 
    prevResult,
    num, 
    newResult
) {
    const logEntry =  {
        op : op,
        prevResult : prevResult,
        number: num,
        newResult: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);

}
function add(){
    calculateResult('+');
}

function sub(){
    calculateResult('-');
}

function mul(){
    calculateResult('*');
}

function div(){
    calculateResult('/');
}
function calculateResult(op){
    const initialResult = currentResult;
    let calcDescription;
    if (op == '+'){
        currentResult = currentResult + parseInt(userInput.value);
        calcDescription = `${initialResult} + ${userInput.value}`;
        const logEntry = writeToLog('Add', initialResult, parseInt(userInput.value), currentResult);
    }
    else if (op == '-'){
        currentResult = currentResult - parseInt(userInput.value);
        calcDescription = `${initialResult} - ${userInput.value}`;
        const logEntry = writeToLog('Sub', initialResult, parseInt(userInput.value), currentResult);
    }
    else if (op == '*'){
        currentResult = currentResult * parseInt(userInput.value);
        calcDescription = `${initialResult} * ${userInput.value}`;
        const logEntry = writeToLog('Mul', initialResult, parseInt(userInput.value), currentResult);
    }
    else if (op == '/'){
        currentResult = currentResult / parseInt(userInput.value);
        calcDescription = `${initialResult} / ${userInput.value}`;
        const logEntry = writeToLog('Div', initialResult, parseInt(userInput.value), currentResult);
    }
    outputResult(currentResult, calcDescription);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);