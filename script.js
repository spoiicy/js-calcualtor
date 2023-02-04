function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    console.log(num1-num2);
    return num1-num2;
}

function mulitply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if(num2===0){
        alert('undefined')
    }
    return num1/num2;
}




function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return mulitply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}



function calculate(){

}

let firstOperator = true;
let firstOperator_symbol;

function displayNumber(button_id){
    const display_number = document.querySelector('.screen');
    const content = document.createElement('div');
    content.classList.add('screen-content');
    const remove_content = document.querySelectorAll('.screen-content');
    switch(button_id){
        case 'one':
            display_number.textContent += '1';
            //display_number.appendChild(content);
            break;
        case 'two':
            display_number.textContent += '2';
            //display_number.appendChild(content);
            break;
        case 'three':
            display_number.textContent += '3';
            //display_number.appendChild(content);
            break;
        case 'four':
            display_number.textContent += '4';
            //display_number.appendChild(content);
            break;
        case 'five':
            display_number.textContent += '5';
            //display_number.appendChild(content);
            break;
        case 'six':
            display_number.textContent += '6';
            //display_number.appendChild(content);
            break;
        case 'seven':
            display_number.textContent += '7';
            //display_number.appendChild(content);
            break;
        case 'eight':
            display_number.textContent += '8';
            //isplay_number.appendChild(content);
            break;
        case 'nine':
            display_number.textContent += '9';
            //display_number.appendChild(content);
            break;
        case 'zero':
            display_number.textContent += '0';
            //display_number.appendChild(content);
            break;
        case 'clear':
            display_number.removeChild(display_number.lastChild);
            break;
        case 'add':
            if(firstOperator == false){
                string = document.querySelector('.screen').textContent;
                string = string.split(firstOperator_symbol);
                let result = operate(firstOperator_symbol,parseInt(string[0]), parseInt(string[1]));
                display_number.textContent = '';
                display_number.textContent = result + '+';
                firstOperator_symbol = '+';
                console.log(result);
            }
            else{
                firstOperator_symbol = '+';
                display_number.textContent += '+';
                firstOperator = false;
            }
            
            //display_number.appendChild(content);
            calculate();
            break;
    
        
        case 'multiply':
            if(firstOperator == false){
                string = document.querySelector('.screen').textContent;
                string = string.split(firstOperator_symbol);
                let result = operate(firstOperator_symbol,parseInt(string[0]), parseInt(string[1]));
                console.log(result);
                display_number.textContent = '';
                display_number.textContent = result+'*';
                firstOperator_symbol = '*';
                
            }
            else{
                firstOperator_symbol = '*';
                display_number.textContent += '*';
                firstOperator = false;
            }
            break;
            
        
        case 'subtract':
            if(firstOperator == false){
                string = document.querySelector('.screen').textContent;
                string = string.split(firstOperator_symbol);
                let result = operate(firstOperator_symbol,parseInt(string[0]), parseInt(string[1]));
                console.log(result);
                display_number.textContent = '';
                display_number.textContent = result+'-';
                firstOperator_symbol = '-';
                
            }
            else{
                firstOperator_symbol = '-';
                display_number.textContent += '-';
                firstOperator = false;
            }
            break;
        case 'divide':
            if(firstOperator == false){
                string = document.querySelector('.screen').textContent;
                string = string.split(firstOperator_symbol);
                let result = operate(firstOperator_symbol,parseInt(string[0]), parseInt(string[1]));
                console.log(result);
                display_number.textContent = '';
                display_number.textContent = result+'/';
                firstOperator_symbol = '/';
                
            }
            else{
                firstOperator_symbol = '/';
                display_number.textContent += '/';
                firstOperator = false;
            }
            break;
            
            

        case 'ac':
            remove_content.forEach(element => element.remove());
            break;

        

    }
    
    
}


const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayNumber(button.id);
    });
});






