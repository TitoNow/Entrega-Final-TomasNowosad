import React from 'react'
import { useState } from "react"

const Contador = () => {
  
  const [initial, setInitial] = useState(1);

  const restar = () => 
    initial > 1 && setInitial(initial - 1);

  const sumar = () => 
    initial < 5 && setInitial(initial + 1);
  

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Añadir al carrito:</h2>
      <nav class="botones-cantidad">
        <button class="btn" onClick={sumar}>+</button>
        <h3>{initial}</h3>
        <button class="btn" onClick={restar}>-</button>
      </nav>
    </div>
  );
};

export default Contador;