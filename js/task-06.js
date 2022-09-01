const refs = {
  inputEl: document.querySelector('#validation-input'),
};

refs.inputEl.addEventListener('blur', (event) => {
  const requiredNumbersOfChars = Number(refs.inputEl.dataset.length);
  const numberOfEnteredChars = event.currentTarget.value.length;

  if (requiredNumbersOfChars === numberOfEnteredChars) {
    refs.inputEl.classList.add('valid');
    refs.inputEl.classList.remove('invalid');
  } else {
    refs.inputEl.classList.add('invalid');
    refs.inputEl.classList.remove('valid');
  }
});
