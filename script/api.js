const fetchApi = async () => {
  try{
    const response = await fetch('https://fakestoreapi.com/products/1');
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse)
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchApi
