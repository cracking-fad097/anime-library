import { NavLink } from 'react-router-dom'
import styles from './AnimeItem.module.css'

export const AnimeItem = ({id, title, vote, poster}) => {
    return <li className={styles.animeItem}>
        <NavLink className={styles.animeLink} to={`/AnimePage/${id}`}>
            <img src={poster} alt=".." className={styles.img} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.vote}>{vote}</p>
        </NavLink>
    </li>
}