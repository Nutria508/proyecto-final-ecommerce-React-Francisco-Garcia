import styles from './Footer.module.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.footer__companies}>
                    <li><a href="https://www.facebook.com" target="_blank"><img src="/images/facebook.png" alt="facebook" /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><img src="/images/instagram.png" alt="instagram" /></a></li>
                    <li><a href="https://x.com/" target="_blank"><img src="/images/twitter-alt.png" alt="twitter" /></a>
                    </li>
                    <li><a href="https://web.whatsapp.com/" target="_blank"><img src="/images/whatsapp.png"
                        alt="whatsapp" /></a></li>
                    <li><a href="https://web.telegram.org/" target="_blank"><img src="/images/telegram.png"
                        alt="telegram" /></a></li>
                    <li><a href="https://discord.com/" target="_blank"><img src="/images/discord.png"
                        alt="discord" /></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;