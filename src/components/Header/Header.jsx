import { Navigation } from '../Navigation/Navigation.jsx'
import { NavLink } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import Logo from '../../assets/images/Logo.png'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/' className={styles.akatsuki}>
                <img src={Logo} alt=".." className={styles.logo} />
            </NavLink>
            <nav className={styles.navigation}>
                <Navigation />
            </nav>
            <SearchBar />
        </header>
    )
}