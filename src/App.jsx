import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NabVar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={ <ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />


        </Routes>
        <Footer />
      </BrowserRouter>

      
      
    </>
  );
}

export default App;
