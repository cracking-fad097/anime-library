import navigation from '../../data/navigation.json'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <ul className={styles.list}>
            {/* <li><Link to="/"></Link></li> */}
            {navigation.map(({id, text, href}) => <li key={id} className={styles.listItem}><NavLink to={href} className={styles.text}>{text}</NavLink></li>)}
        </ul>
    )
}