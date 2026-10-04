import styles from './item.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Item({ id, nombre, precio, img, }) {
    const [favorito, setFavorito] = useState(false);
    const marcarComoFavorito = () => {
        setFavorito(!favorito);
    };

    const CompraClick = () => {
        alert(`agregaste ${nombre} al chango!`);
    };

    return (

        <article className={styles.tarjeta_producto}>
            <Link to={`/producto/${id}`}>
                <img src={img} alt={nombre} />
            </Link>
            <h3>{nombre}</h3>
            <div>
                <p>$ {precio}</p>
                <button onClick={CompraClick} className={styles.btn}>
                    <img className={styles.image} src="./images/carrito-de-compras.png" alt="Agregar al carrito" />
                </button>
                <span onClick={marcarComoFavorito}>
                    {favorito ? '⭐' : '☆'}
                </span>
            </div>

        </article>

    );
}
