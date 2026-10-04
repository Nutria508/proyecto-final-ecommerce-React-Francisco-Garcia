import styles from './Header.module.css';
import {Link} from 'react-router-dom';


function Header() {
    return (

        <header className={styles.header}>
            <p className={styles.header__logo}>
                <Link to="/"><img src="/images/Logo_dbd.webp" width="80px" /></Link>
            </p>
            <nav className={styles.header__nav}>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><button id={styles.mostrarCarrito}><img src="/images/carrito-de-compras.png" />
                    <span id="contador-carrito">0</span>
                </button></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;

