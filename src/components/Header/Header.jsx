import styles from './Header.module.css';
function Header() {
    return(
        <nav className={styles.nav}>
            <a href="/" className={styles.siteTitle}>Site Name</a>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    );
}
export default Header;