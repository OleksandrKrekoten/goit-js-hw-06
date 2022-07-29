
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}
let initialValue = 0
let step = 1

refs.decrementBtn.addEventListener('click', decrementValue)
refs.incrementBtn.addEventListener("click", incrementValue)
function updateValueUi() {
  refs.counterValue.textContent = initialValue  
}
function decrementValue() {
    initialValue -= step
    updateValueUi()
}
function incrementValue() {
    initialValue += step
    updateValueUi()
}