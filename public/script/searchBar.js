import fetchApi from './api.js';

const searchBarInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

fetchApi().then((response) => {
  const newArray = response.map((element) => {
   return element.title
  });
  console.log(newArray)
});
