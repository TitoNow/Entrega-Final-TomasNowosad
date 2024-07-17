import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";


export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <>
                <h1 className="texto-checkout">Muchas gracias por tu compra</h1>
                <p className="texto-checkout">Para hacer el seguimiento de tu pedido, el identificador es este: {docId}</p>
            </>
        )
    }

  return (
    <div>
        <form class="formulario-contacto" onSubmit={handleSubmit(comprar)}>
            <label for="nombre">Ingrese su nombre:<br></br>
            <input type="text" placeholder="Ingrese su nombre" required {...register("nombre")} />
            </label>
            <label for="email">Ingrese su email:<br></br>
            <input type="email" placeholder="Ingrese su e-mail" required {...register("email")} />
            </label>
            <label for="mensaje">Contanos tu experiencia:<br></br>
                <textarea class="" name="mensajes" id="mensajes" placeholder="Tu mensaje (opcional)"></textarea>
            </label>
            <button className="botones" type="submit">Comprar</button>
        </form>
    </div>
  )
}