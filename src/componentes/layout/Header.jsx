import styles from './Header.module.css'

function Header(){
    return(
        
        <header className={styles.header}>
        <p className={styles.header__logo}>
            <a href="./index.html"><img src="./img/Logo_dbd.webp" width="80px"/></a>
        </p>

        <nav className={styles.header__nav}>
            <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./pages/carrito.html">Carrito</a></li>
                <li><a href="./pages/form.html">Contacto</a></li>
                <li><button id={styles.mostrarCarrito}><img  src="img/carrito-de-compras.png"/> 
                    <span id="contador-carrito">0</span>
                </button></li>
            </ul>
        </nav>

    </header>
    );
}

export default Header;

