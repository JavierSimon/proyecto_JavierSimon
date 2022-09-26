import React from "react";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import { CartProvider } from './context/CartContext';
import Footer from "./components/Footer/Footer";
import Form from "./components/Order/Form";
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
            <Route path='/order' element={<Form />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </CartProvider>


    </>
  );
}

export default App;
