import React, { Fragment } from "react";

const Producto = ({ producto, carrito, setCarrito, productos }) => {
  const { id, nombre } = producto;

  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id);
    setCarrito([...carrito, ...producto]);
  };

  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    setCarrito(productos);
  };

  return (
    <Fragment>
      <h2>{id}</h2>
      <h2>{nombre}</h2>

      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Agregar producto al carrito
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar producto del carrito
        </button>
      )}
    </Fragment>
  );
};

export default Producto;
