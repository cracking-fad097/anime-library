import styles from './Contact.module.css'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Contact = () => {
    return <div className={styles.contactWrapper}>
        <h1 className={styles.contactTitle}>Contacts Us</h1>
        <ul className={styles.linksWrapper}>
            <li className={styles.contactItem}><a href="https://t.me/@et3rnxlflow" target='_blank' className={styles.linkIcons}><FaTelegram size={30}/> Vsevolod</a></li>
            <li className={styles.contactItem}><a href="https://t.me/@theburdensome" target='_blank' className={styles.linkIcons}><FaTelegram size={30}/> Egorka</a></li>
            <li className={styles.contactItem}><a href="https://www.instagram.com/et3rnxlflow/" target='_blank' className={styles.linkIcons}><FaInstagram size={30}/> Vsevolod</a></li>
            <li className={styles.contactItem}><a href="https://www.instagram.com/crackingfad/" target='_blank' className={styles.linkIcons}><FaInstagram size={30}/> Egorka</a></li>
            <li className={styles.contactItem}><a href="mailto:vmogutnenko@gmail.com" className={styles.linkIcons}><BiLogoGmail size={30}/> vmogutnenko@gmail.com Vsevolod</a></li>
            <li className={styles.contactItem}><a href="mailto:crackingfad@gmail.com" className={styles.linkIcons}><BiLogoGmail size={30}/> crackingfad@gmail.com Egorka</a></li>
        </ul>
    </div>
}