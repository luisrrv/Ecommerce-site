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
  console.log(response)
})
