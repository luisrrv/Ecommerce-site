const formContainer = document.getElementById('form');
const submitButton = document.getElementById('submit-btn');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
var title = '';
var description = '';

const getTitleValue = (event) => {
  title = event.target.value
  console.log(title)
}

const getDescriptionValue = (event) => {
  title = event.target.value
  console.log(description)
}


titleInput.addEventListener('change', getTitleValue)



const onSubmit = () => {
  console.log('hola papis')
}

submitButton.addEventListener('click', onSubmit);
