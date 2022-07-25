// === Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item ===

const listOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listOfCategories.length);

// === Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >) ===

for (let elem of listOfCategories) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category}
Elements: ${quantityElem}`);
}
