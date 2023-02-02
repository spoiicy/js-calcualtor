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



function displayNumber(button_id){
    const display_number = document.querySelector('.screen');
    
    const content = document.createElement('div');
    content.classList.add('screen-content');
    const remove_content = document.querySelectorAll('.screen-content');
    switch(button_id){
        case 'one':
            content.textContent = '1';
            display_number.appendChild(content);
            break;
        case 'two':
            content.textContent = '2';
            display_number.appendChild(content);
            break;
        case 'three':
            content.textContent = '3';
            display_number.appendChild(content);
            break;
        case 'four':
            content.textContent = '4';
            display_number.appendChild(content);
            break;
        case 'five':
            content.textContent = '5';
            display_number.appendChild(content);
            break;
        case 'six':
            content.textContent = '6';
            display_number.appendChild(content);
            break;
        case 'seven':
            content.textContent = '7';
            display_number.appendChild(content);
            break;
        case 'eight':
            content.textContent = '8';
            display_number.appendChild(content);
            break;
        case 'nine':
            content.textContent = '9';
            display_number.appendChild(content);
            break;
        case 'zero':
            content.textContent = '0';
            display_number.appendChild(content);
            break;
        case 'clear':
            display_number.removeChild(display_number.lastChild);
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



operate('*',1,2);