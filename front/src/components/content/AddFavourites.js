import axios from 'axios';

const addToFavourites = async (movie_id, token) => {
  console.log('token: ', token, 'movie_id: ', movie_id)
  const request_body = {
    "movieId": movie_id
  }
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/favourites/private/add`,
                       request_body, {
                        headers: {
                          'Authorization': `bearer ${token}`,
                          'Content-Type': 'application/json',
                          withCredentials: true}
                        });
    if (response.status === 200) {
      return 'Kohde lisätty suosikkeihin';
    }
  } catch (error) {
    console.error('Virhe tapahtui', error);
    if(error.response.status === 403) {
      return 'Kirjaudu sisään lisätäksesi suosikkeihin';
    } else if(error.response.status === 400) {
      return 'Kohde on jo suosikeissa';
    }
    return "Virhe tapahtui"
    
  }
}

export default addToFavourites;