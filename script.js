// Get the calculator display element
const display = document.querySelector('#display');

function appendNumber(number) {
    // Append the clicked number to the display
    display.value += number;
}

function appendOperator(operator) {
    // Append the operator to the display
    display.value += operator;
}

function calculate() {
    // Evaluate the expression and display the result
    display.value = eval(display.value);
}

function clearDisplay() {
    // Clear the display
    display.value = '';
}

// Add event listener to the square button
document.querySelector('.square').addEventListener('click', () => {
    // Get the current value on the display
    const currentValue = display.value;

    // Calculate the square of the current value
    const squareValue = Math.pow(parseFloat(currentValue), 2);

    // Update the display with the square value
    display.value = squareValue;
});

// Add event listener to the square root button
document.querySelector('.root').addEventListener('click', () => {
    // Get the current value on the display
    const currentValue = display.value;

    // Calculate the square root of the current value
    const sqrtValue = Math.sqrt(parseFloat(currentValue));

    // Update the display with the square root value
    display.value = sqrtValue;
});

// Add event listener to the multiply button
document.querySelector('.multiply').addEventListener('click', () => {
    // Append the multiply operator to the display
    display.value += '*';
});

// Add event listener to the divide button
document.querySelector('.divide').addEventListener('click', () => {
    // Append the divide operator to the display
    display.value += '/';
});
