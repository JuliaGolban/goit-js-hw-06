const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  console.log(formData);

  // *** или так ***
  // console.log(`Email: ${email.value}, Password: ${password.value}`);

  // *** или так ***
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(name, value);
  // });

  event.currentTarget.reset();
}
