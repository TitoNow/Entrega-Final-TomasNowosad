import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ( {producto} ) => {

    const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="producto-info">
        <h1>{producto.nombre}</h1>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} />
        <h3>${producto.precio}</h3>
        <h3>{producto.descripcion}</h3>
        <h3>En Stock: {producto.stock}</h3>
        <button className='botones'onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}
