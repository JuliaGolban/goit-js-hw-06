const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul#ingredients');

// ==== oldSchool:
// for (let i = 0; i < ingredients.length; i += 1) {

//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add('item');
//   listIngredients.append(itemEl);

//   console.log(itemEl);
// }

// ==== modern:
const elements = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList.add('item');
  return itemEl;
});
listIngredients.append(...elements);

// // ==== in one line:
// const elements = ingredients
//   .map(item => `<li class="item">${item}</li>`)
//   .join('');
// console.log(elements);
// listIngredients.innerHTML = elements;

// // ==== or:
// const elements = ingredients.reduce(
//   (acc, item) => acc + `<li class="item">${item}</li>`,
//   ''
// );
// listIngredients.innerHTML = elements;
