import React from "react";
import ItemDetailContainer from "./components/DetalleProducto/ItemDetailContainer";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
