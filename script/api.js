import fetch from 'node-fetch';

const fetchApi = async () => {
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    if(response.ok) {
      const jsonResponse = await response.json();
      return response
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchApi;
