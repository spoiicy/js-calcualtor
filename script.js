function add(num1,num2){
    console.log(num1+num2);
    return num1+num2;
}

function subtract(num1,num2){
    console.log(num1-num2);
    return num1-num2;
}

function mulitply(num1,num2){
    console.log(num1*num2);
    return num1*num2;
}

function divide(num1,num2){
    if(num2===0){
        alert('undefined')
    }
    console.log(num1/num2);
    return num1/num2;
}




function operate(operator,num1,num2){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            mulitply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
    }
}







operate('*',1,2);