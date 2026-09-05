import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from './SearchBar.module.css'
import { getByName } from "../../helpers/services";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
    const [name, setName] = useState('')
    const [anime, setAnime] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const handleInputChange = (event) => {
        const {value} = event.target
        setName(value)
    }
    
    const handleSearchSubmit = (event) => {
        event.preventDefault()
        setSearchParams({name})
        // getByName(name).then((data) => setAnime(data))
    }

    return <form className={styles.wrapper} onSubmit={handleSearchSubmit}>
        <input type="text" value={name} className={styles.input} onChange={handleInputChange}/>
        <button type="submit" className={styles.searchIconWrapper}><FaSearch className={styles.searchIcon}/></button>
    </form>
}

/* TODO:
    - otrisovat animeshki po imeni
*/