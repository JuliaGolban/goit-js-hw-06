const counter = document.querySelector('#counter');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  return (document.querySelector('#value').textContent = counterValue);
});
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  return (document.querySelector('#value').textContent = counterValue);
});
