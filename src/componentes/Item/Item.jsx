export function Item ({ nombre, precio, stock}){
    return(
        <div>
            <h3>{nombre}</h3>
            <p>Stock disponible: {stock}</p>
            <button> Comprar</button>
        </div>
    );
}