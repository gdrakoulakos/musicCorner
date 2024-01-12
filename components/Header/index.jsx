import styles from "./Header.module.css"

function Header () {
    return (
        <div className={styles.headerContainer}> 
            <div className="headerLogo">
                <a href="http://localhost:3000"><img src="./images/musicCornerLogo.jpg" alt="logo of music corner" /></a>
            </div>
            <div className={styles.headerMenu}>
                <a href="http://localhost:3000">String</a>
                <a href="http://localhost:3000">Percussion</a>
                <a href="http://localhost:3000">Brass</a>
                <a href="http://localhost:3000">Woodwind</a>
                <a href="http://localhost:3000">Plucked</a>
            </div>
            <div className={styles.headerQuizzes}>
                <a href="http://localhost:3000">Quizzes</a>
            </div>
        </div>
    )
    
}

export default Header;