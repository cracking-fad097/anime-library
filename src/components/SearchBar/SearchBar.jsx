import { FaSearch } from "react-icons/fa";
import styles from './SearchBar.module.css'

export const SearchBar = () => {
    return <div className={styles.wrapper}>
        <input type="text" className={styles.input}/>
        <button className={styles.searchIconWrapper}><FaSearch className={styles.searchIcon}/></button>
    </div>
}