const rangeInputEl = document.querySelector('input[type="range"]');
const textEl = document.querySelector('#text');

console.dir(rangeInputEl);
console.dir(textEl);

rangeInputEl.addEventListener('input', e => {
  const size = rangeInputEl.value;
  textEl.style.fontSize = size + 'px';
});

console.log(rangeInputEl.value);
console.dir(textEl.style.fontSize);
