import React from 'react'
import { useEffect, useState } from 'react'
import { useLoginData } from '../../context/useLoginData';
import axios from 'axios'
import PaginatorNavigateMenu from './Movies/PaginatorNavigateMenu';

export default function ViewFavouritesList() {
  const loginData = useLoginData()
  const [favourites, setFavourites] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

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
    <div>
        <PaginatorNavigateMenu currentPage={page} totalPages={totalPages} onPageChange={setPage}/>

            <h2>Suosikkilistasi</h2>
            <ul>
                {favourites.map(favourite => (
                <div>
                    <h3 key={favourite.id}>{favourite.first.type}</h3>
                    <p>{favourite.second.original_title}</p>
                </div>
                ))}
            </ul>

        <PaginatorNavigateMenu currentPage={page} totalPages={totalPages} onPageChange={setPage}/>
    </div>
  )
}
