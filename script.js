const calculatorDisplay = document.querySelector('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')

// Input numbers into the display screen
function sendNumberValue(number) {
  // console.log(number)
  // if the current display value is 0, replace it; if not, add the number
  const displayValue = calculatorDisplay.textContent
  calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number
}
// console.log(inputBtns)

function addDecimal() {
  // If no decimal, add one (to stop user inputting multiple decimals)
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`

  }
}

// Add Event Listeners for number, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {   // the number buttons havent been assigned classes in html
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)) // return the number stored in the buttons' value
  } else if (inputBtn.classList.contains('operator')) { // if a button has a class="operator" in index.html
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)) // return the operator symbol
  } else if (inputBtn.classList.contains('decimal')) { // if a button has a class="decimal" symbol
    inputBtn.addEventListener('click', () => addDecimal()) // 
  }
})

// Reset display
function resetAll() {
  calculatorDisplay.textContent = '0'
}

// Event Listener
clearBtn.addEventListener('click', resetAll)