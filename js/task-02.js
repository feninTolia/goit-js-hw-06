const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredientRef = document.querySelector('#ingredients');

const ingredientsLiRefs = ingredients.map((el) => {
  const liRef = document.createElement('li');
  liRef.textContent = el;
  liRef.classList.add('item');
  return liRef;
});

ulIngredientRef.append(...ingredientsLiRefs);
