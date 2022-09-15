import React from "react";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./components/NavBar/Cart";
import { CartProvider } from './context/CartContext'

function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalles/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>


    </>
  );
}

export default App;
