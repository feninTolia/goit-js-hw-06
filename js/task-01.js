const categoriesRef = document.querySelector('#categories');
console.log(`Numbers of categories: ${categoriesRef.children.length}`);

const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach((el) => {
  console.log('');
  console.log(`Category: ${el.firstElementChild.innerText}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
