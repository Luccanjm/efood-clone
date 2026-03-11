import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import CheckoutEndereco from "./pages/CheckoutEndereco";
import CheckoutPagamento from "./pages/CheckoutPagamento";
import PedidoConfirmado from "./pages/PedidoConfirmado";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/checkout/endereco" element={<CheckoutEndereco />} />
          <Route path="/checkout/pagamento" element={<CheckoutPagamento />} />
          <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;