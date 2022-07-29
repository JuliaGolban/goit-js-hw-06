const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('div#boxes');

console.dir(inputNumber);
console.dir(btnCreate, btnDestroy);
console.dir(boxes);

btnCreate.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = +inputNumber.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let baseboxSize = 30;
  let array = [];
  for (let i = 0; i < amount; i += 1) {
    let newBoxes = document.createElement('div');
    newBoxes.append(i);
    array.push(newBoxes);

    baseboxSize += 10;
    addStyleNewBoxes(newBoxes, baseboxSize);

    // let fragment = new DocumentFragment();
    // for (let i = 0; i < amount; i += 1) {
    //   const newBoxes = document.createElement('div');
    //   newBoxes.textContent = +i;
    //   fragment.appendChild(newBoxes);
    //   addStyleNewBoxes(newBoxes, baseboxSize);
    // }
    // boxes.append(fragment);
  }
  boxes.append(...array);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  // boxes.remove();
}

function addStyleNewBoxes(newBoxes, baseboxSize) {
  newBoxes.style.backgroundColor = getRandomHexColor();
  newBoxes.style.height = baseboxSize + 'px';
  newBoxes.style.width = baseboxSize + 'px';
  newBoxes.style.margin = '10px';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
