import React from 'react'
import { useEffect, useState } from 'react'
import { useLoginData } from '../../context/useLoginData';
import axios from 'axios'
import PaginatorNavigateMenu from './Movies/PaginatorNavigateMenu';
import styles from './css/ViewFavouritesList.module.css'
import { set } from 'date-fns';

export default function ViewFavouritesList() {
  const loginData = useLoginData()
  const [favourites, setFavourites] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Suosikkilistasi on tyhjä')

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
            if (response.data.favourites.length === 0) {
                setStatusMessage('Suosikkilistasi on tyhjä');
            }else { 
                setStatusMessage('Suosikkilistasi');
            }
            console.log('Suosikit: ', response.data);
        }
    } catch (error) {
        console.error('Virhe haettaessa suosikkeja:', error);
        setStatusMessage('Virhe haettaessa suosikkeja');
    }
  }
  
useEffect(() => {
    getFavourites()
}, [page])

  return (
    <div className={styles.favourites}>
        <h2 className={styles.heading}>{statusMessage}</h2>
        {favourites.length > 0 && 
        <>
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
        </>}
    </div>
  )
}