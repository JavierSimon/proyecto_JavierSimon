import React, { useState } from "react";
import ItemCount from "./components/Contador/ItemCount";
import ItemDetailContainer from "./components/DetalleProducto/ItemDetailContainer";
// import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  // const greeting = 'Hola a todos soy el greeting'

  const [count, setCount] = useState(0)
  const stock = 10;

  const handleAumentar = () => count < stock ? setCount(count + 1) : alert('¡Lo sentimos!No tenemos mas unidades.')

  const handleRestar = () => count > 0 ? setCount(count - 1) : alert('Por favor, seleccione al menos 1 unidad.')
 
  const onAdd = () => console.log(count)

  return (
    <>
      <NavBar />

      {/* <ItemListContainer greeting={greeting} bg='lightblue' pd='5px' /> */}
      <ItemDetailContainer />
      <h2>Contador:</h2>
      <ItemCount
        count={count}
        handleAumentar={handleAumentar}
        handleRestar={handleRestar}
        onAdd={onAdd}
      />
    </>
  );
}

export default App;
