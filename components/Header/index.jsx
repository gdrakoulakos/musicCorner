import styles from "./Header.module.css"

function Header () {
    return (
        <div className={styles.headerContainer}> 
            <div className="headerLogo">
                <a href="http://localhost:3000"><img src="./images/musicCornerLogo.jpg" alt="logo of music corner" /></a>
            </div>
            <div className={styles.headerMenu}>
                <a>String</a>
                <a>Percussion</a>
                <a>Brass</a>
                <a>Woodwind</a>
                <a>Plucked</a>
            </div>
            <div className={styles.headerQuizes}>
                <a>Quizzes</a>
            </div>
        </div>
    )
    
}

export default Header;