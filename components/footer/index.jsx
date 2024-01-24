import styles from '../footer/Footer.module.css'

function Footer () {
    return(
        <div className={styles.footer}>
        <footer>© {new Date().getFullYear()} George Drakoulakos </footer>
        </div>
    )
}

export default Footer;
