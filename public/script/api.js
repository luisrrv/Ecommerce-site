const fetchApi = async () => {
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    if(response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchApi
