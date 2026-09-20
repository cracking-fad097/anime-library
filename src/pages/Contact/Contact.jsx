import styles from './Contact.module.css'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Contact = () => {
    return <div className={styles.contactWrapper}>
        <h1 className={styles.contactTitle}>Contacts Us</h1>
        <ul>
            <li className={styles.contactItem}><a href="" target='_blank' className={styles.linkIcons}><FaTelegram /></a></li>
            <li className={styles.contactItem}><a href="" target='_blank' className={styles.linkIcons}><FaTelegram /></a></li>
            <li className={styles.contactItem}><a href="https://www.instagram.com/et3rnxlflow/" target='_blank' className={styles.linkIcons}><FaInstagram /></a></li>
            <li className={styles.contactItem}><a href="https://www.instagram.com/crackingfad/" target='_blank' className={styles.linkIcons}><FaInstagram /></a></li>
            <li className={styles.contactItem}><a href="mailto:vmogutnenko@gmail.com" className={styles.linkIcons}><BiLogoGmail /> vmogutnenko@gmail.com</a></li>
            <li className={styles.contactItem}><a href="mailto:crackingfad@gmail.com" className={styles.linkIcons}><BiLogoGmail /> crackingfad@gmail.com</a></li>
        </ul>
    </div>
}