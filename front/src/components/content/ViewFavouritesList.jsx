import React from 'react'
import { useEffect, useState } from 'react'
import { useLoginData } from '../../context/useLoginData';
import axios from 'axios'
import PaginatorNavigateMenu from './Movies/PaginatorNavigateMenu';
import styles from './css/ViewFavouritesList.module.css'

export default function ViewFavouritesList() {
  const loginData = useLoginData()
  const [favourites, setFavourites] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const deleteFavourite = async (id) => {
    console.log('Poistetaan suosikki:', id);
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/favourites/private/deletefavourite/${id}`, {
            withCredentials: true,
            headers: { Authorization: `bearer ${loginData.token}` }
        });
        if (response.status === 200) {
            console.log('Suosikki poistettu');
            getFavourites();
        }
    } catch (error) {
        console.error('Virhe poistettaessa suosikkia:', error);
    }
  }

  const getFavourites = async () => {
    setFavourites([])
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/favourites/private/getfavourites/${page}`, {
            withCredentials: true,
            headers: { Authorization: `bearer ${loginData.token}` }
        });
        if (response.status === 200) {
            setTotalPages(response.data.numPages);
            setFavourites(response.data.favourites);
            console.log('Suosikit: ', response.data);
        }
    } catch (error) {
        console.error('Virhe haettaessa suosikkeja:', error);
    }
  }
  
useEffect(() => {
    getFavourites()
}, [page])

  return (
    <div className={styles.favourites}>
        <h2 className={styles.heading}>{favourites.length > 0 ?'Suosikkilistasi':'Sinulla ei vielä ole suosikkeja'}</h2>
        <PaginatorNavigateMenu currentPage={page} totalPages={totalPages} onPageChange={setPage}/>
            <div className={styles.container}>
                <ul className={styles.favouritesList}>
                    {favourites.map(favourite => (
                    <div className={styles.favourite}>
                        <div className={styles.upper}>
                            <h3 className={styles.type} key={favourite.first.favouriteId}>{favourite.first.type == 'movie'? 'Elokuva':'Sarja'}</h3>
                            <button className={styles.remove} onClick={() => deleteFavourite(favourite.first.movieId)} >Poista</button>
                        </div>
                        <p className={styles.title}>{favourite.first.type === 'movie' ? favourite.second.original_title : favourite.second.original_name}</p>
                    </div>
                    ))}
                </ul>
            </div>
        <PaginatorNavigateMenu currentPage={page} totalPages={totalPages} onPageChange={setPage}/>
    </div>
  )
}
