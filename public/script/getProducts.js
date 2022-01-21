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
      <div class="products-all">
        <h1>${element.title}</h1>
        <img class="product-img" src="${element.url}" style="width:100px">
        <p>${element.description}</p>
        <span>Price: ${element.price}¥</span>
      </div>
    `)
  })
})
