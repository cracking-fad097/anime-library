import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { getAnimes } from '../../helpers/services'
import { AnimeList } from '../../components/AnimeList/AnimeList'

export const Home = () => {
    const [animes, setAnimes] = useState(null)

    useEffect(() => {
        getAnimes().then((data) => setAnimes(data))
    }, [])

    return <div className={styles.home}>
        <AnimeList animes={animes?.data.data} />
    </div>
}