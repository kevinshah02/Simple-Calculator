const buttonsContainer = document.querySelector('.buttons');
const resultInput = document.getElementById('result');

const buttons = [
    '7', '8', '9', 'C',
    '4', '5', '6', '/',
    '1', '2', '3', '*',
    '0', '.', '=', '-',
    '+'
];

buttons.forEach(buttonText => {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.addEventListener('click', () => onButtonClick(buttonText));
    buttonsContainer.appendChild(button);
});

let currentInput = '';

function onButtonClick(value) {
    if (value === 'C') {
        currentInput = '';
    } else if (value === '=') {
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
    } else {
        currentInput += value;
    }
    
    updateResult();
}

function updateResult() {
    resultInput.value = currentInput;
}
