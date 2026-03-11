import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;