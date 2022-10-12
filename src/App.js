import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Order/Form";
import { CartProvider } from './context/CartContext';
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
