function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;
const boxesSetupArr = [];
let boxesMarkup = ``;
let width = 20;
let height = 20;

const refs = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const createBoxesSetupArr = (amount) => {
  for (let index = 0; index < amount; index += 1) {
    let obj = {
      boxWidth: (width += 10),
      boxHeight: (height += 10),
      bgcolor: getRandomHexColor(),
    };
    boxesSetupArr.push(obj);
  }
};

const createBoxes = () => {
  boxesMarkup = boxesSetupArr
    .map(
      ({ boxWidth, boxHeight, bgcolor }) =>
        `<div style="width: ${boxWidth}px; height: ${boxHeight}px; background-color: ${bgcolor};"></div>`
    )
    .join(' ');

  refs.boxes.insertAdjacentHTML('beforeend', boxesMarkup);
};

refs.input.addEventListener('input', () => {
  amount = refs.input.value;
});

refs.createBtn.addEventListener('click', () => {
  createBoxesSetupArr(amount);
  createBoxes(amount);
});

refs.destroyBtn.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
});
