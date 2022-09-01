function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const rgb2hex = (rgb) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`;

const refs = {
  randomBtn: document.querySelector('.change-color'),
  colorTextSpan: document.querySelector('.color'),
};

refs.colorTextSpan.textContent = '#ffffff';

refs.randomBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.colorTextSpan.textContent = rgb2hex(document.body.style.backgroundColor);
});
