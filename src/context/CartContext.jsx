import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([carritoInicial]);

    
    const agregarAlCarrito = (producto) => {
      setCarrito([...carrito, producto]);
    }
  
    const calcularCantidad = () => {
      return carrito.length;
    }

    const calcularTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio, 0);
      return carrito.reduce((acc, prod) => acc + prod.precio, 0).toFixed(2);
    }

    const vaciarCarrito = () => {
      setCarrito([]);
    }

    const eliminarProducto = (producto) => {
      const productoEncontrado = carrito.find(prod => prod.id === producto.id);
      const indice = carrito.indexOf(productoEncontrado);

      setCarrito(carrito.filter(prod => prod.id !== producto.id));
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito])

    return (
        <CartContext.Provider value={ { carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto } }>
            {children}
        </CartContext.Provider>
    )
}