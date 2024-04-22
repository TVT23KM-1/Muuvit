import React from 'react'
import { useEffect, useState } from 'react'
import { useLoginData} from '../../context/useLoginData';
import axios from 'axios'
import PaginatorNavigateMenu from './Movies/PaginatorNavigateMenu';
import styles from './css/ViewGroupSeries.module.css'

export default function ViewGroupSeries({group_id}) {
    const loginData = useLoginData()
    const [series, setSeries] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [statusMessage, setStatusMessage] = useState('Ei sarjoja')

    const getSeries = async () => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie/private/group/getGroupContent/tv/${group_id}/${page}`, {
                withCredentials: true,
                headers: { Authorization: `bearer ${loginData.token}` }
            })
            if (response.status === 200) {
                if(response.data.series.length > 0) {
                    console.log('Sarjat:', response.data.content)
                    setSeries(response.data.content)
                    setTotalPages(response.data.numPages)
                    setPage(response.data.currentPage)
                    setStatusMessage('Sarjat')
                } else {
                    setStatusMessage('Ei sarjoja')
                }
            }
        }
        catch (error) {
            console.error('Virhe haettaessa sarjoja:', error)
            setStatusMessage('Virhe haettaessa sarjoja')
        }
    }

    return (
    <div className={styles.groupSeries}>
        <PaginatorNavigateMenu currentPage={page} onPageChange={setPage} totalPages={totalPages} />
        {series.map(serie => (
                    <div className={styles.serie}>
                        <div className={styles.upper}>
                            <h3 className={styles.type} key={serie.id}>Sarja</h3>
                            <button className={styles.remove} onClick={() => deleteFavourite(favourite.first.movieId)} >Poista</button>
                        </div>
                        <li className={styles.title}>{favourite.second.original_name}</li>
                        
                    </div>
                    ))}
    </div>
  )
}
