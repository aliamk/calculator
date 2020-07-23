const calculatorDisplay = document.querySelector('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')

function sendNumberValue(number) {
  // console.log(number)
  // if the current display value is 0, replace it; if not, add the number
  const displayValue = calculatorDisplay.textContent
  calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number
}
// console.log(inputBtns)

// Add Event Listeners for number, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {   // the number buttons havent been assign classes in html
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)) // return the number stored in the buttons' value
  } else if (inputBtn.classList.contains('operator')) { // if a button has a class="operator" in index.html
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)) // return the operator symbol
  } else if (inputBtn.classList.contains('decimal')) { // if a button has a class="decimal" symbol
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)) // 
  }
})
