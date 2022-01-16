import fetchApi from './api.js';

const searchBarInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

fetchApi().then((response) => {
  return response.map((element) => {
   return element.title
  });

});
