# Calculator JavaScript Code

This repository contains the JavaScript code for a simple calculator.

## Description

The calculator JavaScript code allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes additional functionality to calculate the square and square root of a number.

## Usage

To use the calculator, follow these steps:

1. Include the `script.js` file in your HTML file.
2. Create a `<input>` element with the ID "display" to serve as the calculator display.
3. Add number buttons with the class "number" and operator buttons with the class "operator".
4. Use the `appendNumber()` function to append numbers to the display.
5. Use the `appendOperator()` function to append operators to the display.
6. Use the `calculate()` function to evaluate the expression and display the result.
7. Use the `clearDisplay()` function to clear the display.
8. Additionally, you can use the square and square root buttons to perform those calculations.

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Calculator</title>
  <script src="script.js"></script>
</head>
<body>
  <input type="text" id="display" readonly>

  <button class="number" onclick="appendNumber('7')">7</button>
  <button class="number" onclick="appendNumber('8')">8</button>
  <button class="number" onclick="appendNumber('9')">9</button>
  <button class="operator" onclick="appendOperator('+')">+</button>

  <button class="square" onclick="calculateSquare()">x^2</button>
  <button class="root" onclick="calculateSquareRoot()">√</button>

  <button onclick="calculate()">=</button>
  <button onclick="clearDisplay()">Clear</button>
</body>
</html>