import React from "react";
import ItemDetailContainer from "./components/DetalleProducto/ItemDetailContainer";
// import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  // const greeting = 'Hola a todos soy el greeting'

  return (
    <>
      <NavBar />

      {/* <ItemListContainer greeting={greeting} bg='lightblue' pd='5px' /> */}
      <ItemDetailContainer />

    </>
  );
}

export default App;
