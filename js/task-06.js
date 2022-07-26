const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;

console.dir(inputEl);
console.log(inputLength);

inputEl.addEventListener('change', onInputControlLengthOfValue);

function onInputControlLengthOfValue(event) {
  if (event.target.value.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
