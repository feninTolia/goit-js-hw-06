const refs = {
  form: document.querySelector('.login-form'),
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Заповніть будь-ласка всі поля.');
    return;
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  refs.form.reset();
};

refs.form.addEventListener('submit', onFormSubmit);
