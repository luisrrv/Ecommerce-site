import fetchApi from './api.js';

const button = document.querySelector('.product-btn');
const productsSection = document.querySelector('.products');


fetchApi().then((response) => {
  return response.map((element) => {
    const div = document.createElement('div')
    const title = document.createElement('h4')
    const image = document.createElement('img')
    const description = document.createElement('p');
    const price = document.createElement('p')
    div.className = 'product-container'
    image.src = element.image
    image.className = 'product-img'
    title.innerHTML = element.title
    description.innerHTML = element.description;
    price.innerHTML = `price: $${element.price} `
    div.insertAdjacentElement('afterbegin', title);
    div.insertAdjacentElement('beforeend', image);
    div.insertAdjacentElement('beforeend', description);
    div.insertAdjacentElement('beforeend', price);
    productsSection.insertAdjacentElement('afterbegin', div)
  });
});
