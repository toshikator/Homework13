const calculationFirstValue = document.getElementById('first_value');
const calculationSecondValue = document.getElementById('second_value');
const calculationOperation = document.getElementById('operator');
const calculationResultSpan = document.getElementById('res_calc');
const arrayForSum = [];
const itemForAdd = document.getElementById('item_input');
const arraySumSpan = document.getElementById('sum_item');
const arrayItemsSpan = document.getElementById('array_result');
const numberForReverse = document.getElementById('number_input');
const reverseResultSpan = document.getElementById('reverse_result');

function isNumber(testNumber) {
    if (testNumber === ''){
        return false;
    }
    const testToNumber = +testNumber;
    if (isNaN(testToNumber)){
        return false;
    } else {
        return true;
    }
}

function calculator(firstElem, secondElem, operation) {
    function isNumber(testNumber) {
        if (testNumber === ''){
            return false;
        }
        const testToNumber = +testNumber;
        if (isNaN(+testToNumber)){
            return false;
        } else {
            return true;
        }
    }
    const x = +firstElem;
    const y = +secondElem;
    if (!isNumber(x)){
        alert('incorrect variable for calculating, please check your data');
    } else if(!isNumber(y)){
        alert('incorrect variable for calculating, please check your data');
    } else {
        let result;
        switch (operation) {
            case '+':
                result = x + y;
                return result;
            case '-':
                result = x - y;
                return result;
            case '*':
                result = x * y;
                return result;
            case '/':
                result = x / y;
                return result;
            default:
                alert('incorrect operation, or operation is not supported');
        }
    }
}

function calc() {
    if (!isNumber(+calculationFirstValue.value)){
        calculationFirstValue.textContent = "wrong value, please check it";
    } else if (!isNumber(+calculationSecondValue.value)){
        calculationSecondValue.textContent = "wrong value, please check it";
        console.log('here we are');
    } else {
        const result = calculator(calculationFirstValue.value, calculationSecondValue.value, calculationOperation.value);
        calculationResultSpan.textContent = result;
    }
}

function takeItemForAdd() {
    const itemInput = itemForAdd.value;
    if (!isNumber(itemInput)){
        alert('your input is incorrect, you may use digits only and minimum 1 symbol required');
    } else{
        return +itemInput;
    }
}

function sumArray(array){
    let arraySum = 0;
    array.forEach((elem) => {
        if (isNumber(elem)) {
            arraySum += elem;
        }
    })
    return arraySum;
}

function printArrayToSpan(arrayForPrint, spanForPrint) {
    spanForPrint.textContent = JSON.stringify(arrayForPrint);
}

function addItem() {
    const newItem = takeItemForAdd();
    arrayForSum.push(newItem);
    arraySumSpan.textContent = sumArray(arrayForSum);
    printArrayToSpan(arrayForSum, arrayItemsSpan);
}

function makeItNumber(data) {
    if (typeof data === "number") {
        return data;
    } else if (typeof data === "string") {
        if (isNumber(data)){
            return +data;
        }else{
            alert('incorrect input');
        }
    } else if (typeof data === "object") {
        if (isNumber(data.value)){
            return +data.value;
        }else{
            alert('incorrect input');
        }
    }
    else{
        alert('unknown input type');
    }
}

function reverseNumber() {
    const testNumber = makeItNumber(numberForReverse);
    let test = testNumber.toString();
    let test2 = '';
    for (const testElement of test) {
        test2 = testElement + test2;
    }
    reverseResultSpan.textContent = makeItNumber(test2) + ', and second variation = ' + reverseV2();

}

function reverseV2() {
    const startData =  numberForReverse.value;
    let dataTemp = startData;
    let reversedData = 0;
    console.log(startData);
    for (let i=0; i<startData.toString().length; i++){
        reversedData = (reversedData*10) + (dataTemp%10);
        dataTemp = (dataTemp - dataTemp%10)/10;
    }
    return reversedData;


    // document.getElementById('reverse_result').outerHTML =
    //     `<br><br> <p style="position: absolute; width: 30vw%; height: 100%; background-color: indianred"><span>Reverse number version 2 = </span><span style="color: antiquewhite; font-size: 2em">${reversedData}</span></p>`;

    // document.getElementById('reverse_result').outerHTML =
    //     `<p style="width: 100%; height: 100%; background-color: indianred">
    //     <span>Reverse number version 2 = </span><span style="color: antiquewhite; font-size: 2em">${reversedData}</span></p>`;
}