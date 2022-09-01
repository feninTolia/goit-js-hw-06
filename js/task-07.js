const refs = {
  input: document.querySelector('#font-size-control'),
  textSpan: document.querySelector('#text'),
};

refs.input.addEventListener('input', (event) => {
  refs.textSpan.style.fontSize = `${event.currentTarget.value}px`;
});
