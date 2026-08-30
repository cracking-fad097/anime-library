import styles from './About.module.css'
import developersArray from '../../data/developers.json'

export const About = () => {
    return <div className={styles.about}>
        <h1 className={styles.developersTitle}>⛩️Meet Our Developers 👋</h1>
        <ul className={styles.developersWrapper}>
            {developersArray.map(({id, img, name, age, github}) => <li className={styles.developers} key={id}>
                <img src={img} alt=".." className={styles.developersImg} />
                <p className={styles.developersInfo}>{name}, {age} y. o.</p>
                <a href={github} target='_blank' className={styles.developersLink}>GitHub Link</a>
            </li>)}
        </ul>
    </div>
}