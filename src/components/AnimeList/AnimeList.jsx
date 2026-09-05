import { AnimeItem } from "../AnimeItem/AnimeItem"
import styles from './AnimeList.module.css'

export const AnimeList = ({animes}) => {
    return <ul className={styles.animeList}>
            {animes?.map(({id, attributes:{canonicalTitle, averageRating, posterImage:{small}}}) =>
            <AnimeItem key={id} id={id} title={canonicalTitle} vote={averageRating} poster={small} />)}
            
        </ul>
}