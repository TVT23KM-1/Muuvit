import axios from 'axios';

const addToFavourites = async (movie_id, token) => {
  const request_body = {
    movieId: movie_id
  }
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/favourites/private/add`, request_body, Headers = { 'Authorization': `bearer ${token}` });
    if (response.status === 200) {
      return 'Kohde lisätty suosikkeihin';
    } else if(response.status === 401) {
      return 'Kirjaudu sisään lisätäksesi suosikkeihin';
    } else {
      return 'Virhe lisättäessä suosikkeihin';
    }
  } catch (error) {
    console.error('Virhe lisättäessä suosikkeihin:', error);
  }
}

export default addToFavourites;