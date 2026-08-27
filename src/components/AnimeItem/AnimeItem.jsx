import styles from './AnimeItem.module.css'

export const AnimeItem = ({id, title, vote, poster}) => {
    return <li className={styles.animeItem}>
        <img src={poster} alt=".." />
        <h2>{title}</h2>
        <p>{vote}</p>
    </li>
}