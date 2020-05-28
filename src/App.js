import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "camisa", precio: 50 },
    { id: 2, nombre: "playera", precio: 15 },
    { id: 3, nombre: "short", precio: 35 }
  ]);

  //Agregar productos al carrito
  const [carrito, setCarrito] = useState([]);

  return (
    <Fragment>
      <Header titulo="Tienda virtual" numero={20} />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          setCarrito={setCarrito}
        />
      ))}
      <Carrito carrito={carrito} setCarrito={setCarrito} />

      <Footer />
    </Fragment>
  );
}

export default App;
