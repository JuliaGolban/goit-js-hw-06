const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const bgcName = document.querySelector('.color');

console.dir(bodyEl);
console.dir(buttonEl);
console.dir(bgcName);

buttonEl.addEventListener('click', e => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bgcName.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
