import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='modal-content'>
      <h2>Carrito:</h2>
      {
        carrito.map((prod) =>
          <div key={prod.id}>
            <img src={prod.imagen}></img>
            <h2>{prod.nombre}: ${prod.precio}</h2>
            <button className='botoneliminar' onClick={() => { eliminarProducto(prod)}}>Eliminar del Carrito❌</button>
            </div> 
        )
      }

      {
        carrito.length > 0 ?
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button className='botones'onClick={handleVaciar}>Vaciar carrito</button>
          <Link to="/finalizar-compra" className='botones'>Finalizar compra</Link>
        </> :
        <h2>Carrito vacío :/</h2>
      }
    </div>
  )
}
export default Carrito