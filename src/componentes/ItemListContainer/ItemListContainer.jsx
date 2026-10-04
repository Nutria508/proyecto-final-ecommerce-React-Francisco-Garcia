import React, { useState, useEffect } from 'react';
import { ItemList } from "../ItemList/ItemList";
import styles from './ItemListContainer.module.css';

export function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((repuesta) => {
                if (!repuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return repuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) {
        return <p> Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <section className={styles.productos_home}>
            <h2>"Nuestros productos"</h2>
            <div>
                <ItemList productos={productos} />
            </div>
        </section>
    );

}