import styles from './AnimeItem.module.css'

export const AnimeItem = ({id, title, vote, poster}) => {
    return <li className={styles.animeItem}>
        <img src={poster} alt=".." className={styles.img} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.vote}>{vote}</p>
    </li>
}