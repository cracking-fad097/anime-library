import styles from './Footer.module.css'
import katana from '../../assets/images/katana.png'
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.gitHubs}>
                <a href="https://github.com/cracking-fad097" target="_blank"><FaGithub className={styles.gitItem} /></a>
                <a href="https://github.com/VsevolodMogutnenko" target="_blank"><FaGithub className={styles.gitItem} /></a>
            </div>
            <div className={styles.banner}>
                <img src={katana} alt=".." className={styles.bannerKatana}/>
            </div>
            <p className={styles.copyright}>All rights reserved &copy;</p>
        </footer>
    )
}