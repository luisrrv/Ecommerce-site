const productsDiv = document.getElementById('products');

const fetchData = async () => {
  try{
    const response = await fetch('/products');
    if(response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error)
  }
}

fetchData().then(response => {
  response.map((element) => {
    productsDiv.insertAdjacentHTML('afterbegin', `
      <div class="product-container">
        <h4>${element.title}</h4>
        <img class="product-img" src="${element.url}">
        <p>${element.description}</p>
        <span class="price"><span class="amount">¥${element.price}</span></span>
      </div>
    `)
  })
})
