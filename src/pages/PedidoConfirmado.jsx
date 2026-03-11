import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PedidoConfirmado() {
  return (
    <>
      <Header />
      <div style={{ padding: "16px", textAlign: "center" }}>
        <h2>Pedido realizado com sucesso!</h2>
        <p>Obrigado por comprar conosco. Seu pedido está a caminho!</p>
      </div>
      <Footer />
    </>
  );
}