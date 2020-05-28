import React from "react";
import Producto from "./Producto";
import "./carrito.css";

const Carrito = ({ carrito, setCarrito }) => (
  <div className="carrito">
    <h2>Tu carrito de compras</h2>
    {carrito.map(producto => (
      <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        setCarrito={setCarrito}
      />
    ))}
  </div>
);

export default Carrito;
