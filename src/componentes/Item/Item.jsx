import styles from './item.module.css'

export function Item ({ nombre, precio, img,}){
    return(
        <article className={styles.tarjeta_producto}>
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <div>
                <p>{precio}</p>
                <button className={styles.btn}>
                    <img className={styles.image} src="./img/carrito-de-compras.png" alt="Agregar al carrito"/>
                </button>
            </div>

        </article>
    );
}
