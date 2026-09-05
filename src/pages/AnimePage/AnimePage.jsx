import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../../helpers/services'
import styles from './AnimePage.module.css'

export const AnimePage = () => {
    const {id} = useParams()
    const [anime, setAnime] = useState(null)
    useEffect (() => {
        getById(id).then((data) => {setAnime(data)})
    }, [])
    console.log(anime)
    const path = anime?.data.data.attributes

    return <><div className={styles.animeInfo}>
            <div className={styles.imgWrapper}>
                <img src={path?.posterImage.medium} alt="" />
            </div>
            <div className={styles.infoWrapper}>
                <h1 className={styles.animeName}>{path?.canonicalTitle}</h1>
                <p>Age Rating: {path?.ageRatingGuide}</p>
                <p>Anime Rating: {path?.averageRating}</p>
                <p>Was Releasing: {path?.startDate} - {path?.endDate}</p>
                <p>Episode Count: {path?.episodeCount}</p>
                <p>Average Episode Length: {path?.episodeLength} min</p>
                <p>{path?.description}</p>
            </div>
        </div></>
}