function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  color: document.querySelector('.color')
}
refs.changeColorBtn.addEventListener('click', onChangeColor)

function onChangeColor() {
  const randomColor = getRandomHexColor()
  refs.body.style.backgroundColor = randomColor
  refs.color.textContent = randomColor
}