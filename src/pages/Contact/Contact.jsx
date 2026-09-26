import styles from './Contact.module.css'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Contact = () => {
    return <div className={styles.contactWrapper}>
        <div className={styles.titleWrapper}>
            <h1 className={styles.contactTitle}>📩 Contacts Us 📍</h1>
        </div>
        <ul className={styles.linksWrapper}>
            <li className={styles.contactItem}><a href="https://t.me/@et3rnxlflow" target='_blank' className={styles.linkIcons}><FaTelegram size={40}/> Vsevolod</a></li>
            <li className={styles.contactItem}><a href="https://t.me/@theburdensome" target='_blank' className={styles.linkIcons}><FaTelegram size={40}/> Egorka</a></li>
            <li className={styles.contactItem}><a href="https://www.instagram.com/et3rnxlflow/" target='_blank' className={styles.linkIcons}><FaInstagram size={40}/> Vsevolod</a></li>
            <li className={styles.contactItem}><a href="https://www.instagram.com/crackingfad/" target='_blank' className={styles.linkIcons}><FaInstagram size={40}/> Egorka</a></li>
            <li className={styles.contactItem}><a href="mailto:vmogutnenko@gmail.com" className={styles.linkIcons}><BiLogoGmail size={40}/> vmogutnenko@gmail.com Vsevolod</a></li>
            <li className={styles.contactItem}><a href="mailto:crackingfad@gmail.com" className={styles.linkIcons}><BiLogoGmail size={40}/> crackingfad@gmail.com Egorka</a></li>
        </ul>
    </div>
}