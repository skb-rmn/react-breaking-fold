import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header() {
    return(
        <nav className={styles.nav}>
            <Link to="/" className={styles.siteTitle}>Site Name</Link>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
}
export default Header;