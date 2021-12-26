import fetchApi from './api.js';

const searchBarInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

console.log(searchBarInput);
console.log(searchButton);

fetchApi().then((response) => {
   console.log(response)
});
