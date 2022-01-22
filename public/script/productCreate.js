const formContainer = document.getElementById('form');
const submitButton = document.getElementById('submit-btn');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
var title = '';
var description = '';
var price = '';

const getTitleValue = (event) => {
  title = event.target.value
  console.log(title)
}

const getDescriptionValue = (event) => {
  description = event.target.value
  console.log(description)
}

const getPriceValue = (event) => {
  price = event.target.value
  console.log(price)
}

titleInput.addEventListener('change', getTitleValue)
descriptionInput.addEventListener('change', getDescriptionValue)
priceInput.addEventListener('change', getPriceValue)

const onSubmit = () => {
  console.log(title)
  console.log(description)
  console.log(price)
  // location.reload();
}

submitButton.addEventListener('click', onSubmit);
