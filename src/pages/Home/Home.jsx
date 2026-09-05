import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './Home.module.css'
import { getAnimes } from '../../helpers/services'
import { AnimeList } from '../../components/AnimeList/AnimeList'
import { getByName } from '../../helpers/services'

export const Home = () => {
    const [anime, setAnime] = useState(null)
    const [animes, setAnimes] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const findAnime = searchParams.get('name')??''

    useEffect(() => {
        if (findAnime !== '') {
            getByName(findAnime).then((data) => setAnime(data))
        }
    }, [findAnime])
    
    useEffect(() => {
        getAnimes().then((data) => setAnimes(data))
    }, [])

    return <div className={styles.home}>
        <AnimeList animes={anime?anime?.data.data:animes?.data.data} />
    </div>
}