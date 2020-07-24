const calculatorDisplay = document.querySelector('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')

// Global Variables
let firstValue = 0
let operatorValue = ''
let awaitingNextValue = false // needs triggering after firstValue and operatorValue have been input


// Input numbers into the display screen
function sendNumberValue(number) {
  // console.log(number)
  // Replace the firstValue with awaitingNextValue in the display, only of there already is a firstValue
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number
    awaitingNextValue = false
  } else {
    // if the current display value is 0, replace it; if not, add the number
    const displayValue = calculatorDisplay.textContent
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number
  }
}
// console.log(inputBtns)

function addDecimal() {
  // Once operator has been input, disable the decimal button
  if (awaitingNextValue) return
  // If no decimal already, add one (to stop user inputting multiple decimals)
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
  }
}

// Calculate first and second values depending on operator
const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
  '=': (firstNumber, secondNumber) => secondNumber
}

// Using the JS Number method for converting string to number
function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent)
  // Allows user to do another operation after pressing equals... user can also change operator bc code will work with the last clicked operator
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator
    return
  }
  // Assign firstValue (if there isn't one already)
  if (!firstValue) {
    firstValue = currentValue
  } else {
    // console.log(firstValue,  operatorValue, currentValue) // display:  7 "+" 1
    const calculation = calculate[operatorValue](firstValue, currentValue)
    // console.log('calculation', calculation)
    calculatorDisplay.textContent = calculation // update the display screen when EQUALS is clicked
    firstValue = calculation
  }
  // Ready for next value so store the operator
  awaitingNextValue = true // triggered after operators pressed
  operatorValue = operator
  // console.log('firstValue', firstValue)
  // console.log('operator', operatorValue)
}

// Add Event Listeners for number, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {   // the number buttons havent been assigned classes in html
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)) // return the number stored in the buttons' value
  } else if (inputBtn.classList.contains('operator')) { // if a button has a class="operator" in index.html
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value)) // return the operator symbol
  } else if (inputBtn.classList.contains('decimal')) { // if a button has a class="decimal" symbol
    inputBtn.addEventListener('click', () => addDecimal()) // 
  }
})

// Reset all values and the display screen when pressing the C button
function resetAll() {
  firstValue = 0
  operatorValue = ''
  awaitingNextValue = false
  calculatorDisplay.textContent = '0'
}

// Event Listener
clearBtn.addEventListener('click', resetAll)