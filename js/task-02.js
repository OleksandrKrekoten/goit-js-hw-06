const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const newElement = ingredients.forEach((element) => {
  const createNewElement = document.createElement('li')
  createNewElement.textContent = element
  list.append(createNewElement)
})
 
