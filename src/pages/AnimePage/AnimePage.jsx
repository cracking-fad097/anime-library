import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../../helpers/services'
import styles from './AnimePage.module.css'
import error from '../../assets/images/error.jpg'

export const AnimePage = () => {
    const {id} = useParams()
    const [anime, setAnime] = useState(null)
    const [backgroundImg, setBackgroundImg] = useState(null)
    useEffect (() => {
        getById(id).then((data) => {setAnime(data)
            setBackgroundImg(data?.data.data.attributes.coverImage?.small ?? error)
        })
    }, [])
    console.log(backgroundImg)
    const path = anime?.data.data.attributes

    return <div className={styles.animeInfo} style={{
        backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url(${backgroundImg})`}}>
            <div className={styles.animeWrapper}>
                <h1 className={styles.animeName}>🔥 {path?.canonicalTitle} 🔥</h1>
                <p>Age Rating: {path?.ageRatingGuide}</p>
                <p>Anime Rating: {path?.averageRating}</p>
                <p>Was Releasing: {path?.startDate} - {path?.endDate}</p>
                <p>Episode Count: {path?.episodeCount}</p>
                <p>Average Episode Length: {path?.episodeLength} min</p>
            </div>
            <p>{path?.description}</p>
        </div>
}

/*

TODO:


*/