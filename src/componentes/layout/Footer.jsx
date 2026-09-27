import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                <ul>
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./pages/carrito.html">carrito</a></li>
                    <li><a href="./pages/form.html">Contacto</a></li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.footer__companies}>
                    <li><a href="https://www.facebook.com" target="_blank"><img src="./img/facebook.png" alt="facebook"/></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><img src="./img/instagram.png" alt="instagram"/></a></li>
                    <li><a href="https://x.com/" target="_blank"><img src="./img/twitter-alt.png" alt="twitter"/></a>
                    </li>
                    <li><a href="https://web.whatsapp.com/" target="_blank"><img src="./img/whatsapp.png"
                        alt="whatsapp"/></a></li>
                    <li><a href="https://web.telegram.org/" target="_blank"><img src="./img/telegram.png"
                        alt="telegram"/></a></li>
                    <li><a href="https://discord.com/" target="_blank"><img src="./img/discord.png"
                        alt="discord"/></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;