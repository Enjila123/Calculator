let screen = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => handleButtonClick(e.target.innerText));
});
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'Enter') {
        handleButtonClick('=');
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    } else if (/[\d+\-*/.]/.test(key)) {
        handleButtonClick(key);
    }
});
function handleButtonClick(input) {
    if (input === 'C') {
        displayValue = '';
    } else if (input === 'DEL') {
        displayValue = displayValue.slice(0, -1); }
    else if (input === '=') {
        try {
            displayValue = eval(displayValue);
        } catch (error) {
            displayValue = 'Error';
        }
    } else {
        displayValue += input;
    }
    updateDisplay();
}

function updateDisplay() {
    screen.value = displayValue;
}