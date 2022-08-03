
let amountBox = 0;
const refs = {
  inputValue: document.querySelector('#controls input'),
  createElementBtn: document.querySelector('[data-create]'),
  destroyElementBtn: document.querySelector('[data-destroy]'),
  boxes : document.querySelector('#boxes'),
}
refs.inputValue.addEventListener('input',() => amountBox = refs.inputValue.value)
refs.createElementBtn.addEventListener('click', () => oncreateElement(amountBox))
refs.destroyElementBtn.addEventListener('click',() =>refs.boxes.textContent = '')

function oncreateElement(amountBox) {
  let boxSize = 30
  for (let i = 0; i < amountBox; i += 1, boxSize += 10){
    const container = document.createElement('div')
    container.style.height =`${boxSize}px`
    container.style.width = `${boxSize}px`
    container.style.background = getRandomHexColor()
    refs.boxes.append(container)
  }

 }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

