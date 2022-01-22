const formContainer = document.getElementById('form');
const submitButton = document.getElementById('submit-btn');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const urlInput = document.getElementById('url');
const data = {
  title: '',
  description: '',
  price: '',
  url: ''
}

const getTitleValue = (event) => {
  data.title = event.target.value
}

const getDescriptionValue = (event) => {
  data.description = event.target.value
}

const getPriceValue = (event) => {
  data.price = event.target.value
}

const getUrlValue = (event) => {
  data.url = event.target.value
}

titleInput.addEventListener('change', getTitleValue);
descriptionInput.addEventListener('change', getDescriptionValue);
priceInput.addEventListener('change', getPriceValue);
urlInput.addEventListener('change', getUrlValue);

const postData = () => {
  fetch('/products', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.log('Error:', error))
  .then(response => console.log('Success:', response));
}
const onSubmit = () => {
  postData();
  // location.reload();
}

submitButton.addEventListener('click', onSubmit);
