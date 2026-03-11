import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function CheckoutPagamento() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div style={{ padding: "16px" }}>
        <h2>Pagamento</h2>
        <input placeholder="Número do cartão" />
        <input placeholder="Validade" />
        <input placeholder="CVV" />
        <Button onClick={() => navigate("/pedido-confirmado")}>Finalizar pagamento</Button>
      </div>
      <Footer />
    </>
  );
}