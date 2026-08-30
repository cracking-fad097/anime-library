import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from './SearchBar.module.css'
import { getByName } from "../../helpers/services";

export const SearchBar = () => {
    const [name, setName] = useState('')
    const [anime, setAnime] = useState(null)

    const handleInputChange = (event) => {
        const {value} = event.target
        setName(value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        getByName(name).then((data) => setAnime(data))
    }

    return <div className={styles.wrapper}>
        <input type="text" className={styles.input} onChange={handleInputChange}/>
        <button className={styles.searchIconWrapper} onClick={handleSearchSubmit}><FaSearch className={styles.searchIcon}/></button>
    </div>
}

/* TODO:
    - otrisovat animeshki po imeni
*/