import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductoDetalle.module.css';

const ProductoDetalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === id);
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);
    if (!producto) {
        return <h2>Cargando detalle del producto...</h2>;
    }
    if (!producto.id) {
        return <h2>Producto no encontrado.</h2>;
    }
    return (
        <section className={styles.cuerpo_main}>
            <h2>Detalle del Producto: {producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre}/>
            <p>{producto.descripcion}</p>
            <h3>$ {producto.precio}</h3>
        </section>
    );
};
export default ProductoDetalle;