import styles from './StartPage.module.css'


export function StartPage() {
    return (
        <section className={styles.cuerpo_main}>
            <h1 className={styles.titulo_home}>"Bienvenido a la tienda"</h1>
            
            <p className={styles.parrafo_home}>
                En esta tienda se encontrará el famoso juego de terror Dead by dailight y tambien sus respectivos DLC.
                </p>


            <h2>Trailer del Juego</h2>
            <section >
                <iframe  width="560" height="315" src="https://www.youtube.com/embed/JGhIXLO3ul8?si=JEcxlnvn6BkUmej7"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

            <h2>Reseñas del juego</h2>
            <section className={styles.resenas}>

            </section>
        </section>
    );
}