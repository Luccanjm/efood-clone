import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, toggleCart, clear } from "../store/cartSlice";
import lixeira from "../assets/lixeira.png";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
`;

const SidebarContainer = styled.aside`
  background-color: #E66767;
  width: 360px;
  height: 100%;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  color: #FFEBD9;
  overflow-y: auto;

  h3 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
  p { font-size: 14px; line-height: 22px; margin-bottom: 16px; font-weight: 400; }
`;

const ItemCarrinho = styled.div`
  background-color: #FFEBD9;
  padding: 8px;
  display: flex;
  position: relative;
  margin-bottom: 16px;
  color: #E66767;
  img.foto-produto { width: 80px; height: 80px; object-fit: cover; margin-right: 8px; }
  div h3 { font-size: 18px; font-weight: 900; margin-bottom: 8px; }
  div p { font-size: 14px; font-weight: 400; }
`;

const IconeLixeira = styled.img`
  width: 16px; height: 16px; position: absolute; bottom: 8px; right: 8px; cursor: pointer;
`;

const ValorTotal = styled.div`
  display: flex; justify-content: space-between; color: #FFEBD9; font-weight: 700; font-size: 14px; margin-top: 24px; margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex; flex-direction: column; margin-bottom: 8px;
  label { font-size: 14px; font-weight: 700; margin-bottom: 8px; }
  input { background-color: #FFEBD9; border: none; height: 32px; padding: 0 8px; font-weight: 700; color: #4B4B4B; width: 100%; }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.payment ? "3fr 1fr" : "1fr 1fr")};
  column-gap: ${(props) => (props.payment ? "30px" : "34px")};
`;

const BotaoPrincipal = styled.button`
  width: 100%; background-color: #FFEBD9; color: #E66767; border: none; padding: 4px 0; font-weight: 700; font-size: 14px; cursor: pointer; margin-top: 8px;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export default function CarrinhoSidebar() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  const [etapa, setEtapa] = useState("carrinho");
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Estados do Formulário
  const [formData, setFormData] = useState({
    receiver: "", address: "", city: "", zipCode: "", number: "", complement: "",
    cardName: "", cardNumber: "", cardCode: "", expiresMonth: "", expiresYear: ""
  });

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    const valor = typeof item.preco === 'string' 
      ? parseFloat(item.preco.replace("R$", "").replace(".", "").replace(",", "."))
      : item.preco;
    return acc + valor;
  }, 0);

  const formatarValor = (v) => v.toLocaleString("pt-br", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleClose = () => {
    dispatch(toggleCart());
    setEtapa("carrinho");
    setOrderId("");
  };

  const concluirPedido = async () => {
    setIsLoading(true);
    const payload = {
      products: items.map(item => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: formData.receiver,
        address: {
          description: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
          number: Number(formData.number),
          complement: formData.complement
        }
      },
      payment: {
        card: {
          name: formData.cardName,
          number: formData.cardNumber,
          code: Number(formData.cardCode),
          expires: {
            month: Number(formData.expiresMonth),
            year: Number(formData.expiresYear)
          }
        }
      }
    };

    try {
      const response = await fetch("https://api-ebac.vercel.app/api/efood/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setOrderId(data.orderId);
      setEtapa("confirmacao");
      dispatch(clear());
    } catch (error) {
      alert("Erro ao processar pedido. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <SidebarContainer onClick={(e) => e.stopPropagation()}>
        {etapa === "carrinho" && (
          <>
            {items.length > 0 ? (
              <>
                {items.map((item, index) => (
                  <ItemCarrinho key={index}>
                    <img className="foto-produto" src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{typeof item.preco === 'number' ? formatarValor(item.preco) : item.preco}</p>
                    </div>
                    <IconeLixeira src={lixeira} onClick={() => dispatch(remove(index))} />
                  </ItemCarrinho>
                ))}
                <ValorTotal><span>Valor total</span><span>{formatarValor(total)}</span></ValorTotal>
                <BotaoPrincipal onClick={() => setEtapa("endereco")}>Continuar com a entrega</BotaoPrincipal>
              </>
            ) : (
              <p>O carrinho está vazio. Adicione pratos para continuar.</p>
            )}
          </>
        )}

        {etapa === "endereco" && (
          <>
            <h3>Entrega</h3>
            <FormGroup><label>Quem irá receber</label><input type="text" value={formData.receiver} onChange={(e) => handleInputChange(e, 'receiver')} /></FormGroup>
            <FormGroup><label>Endereço</label><input type="text" value={formData.address} onChange={(e) => handleInputChange(e, 'address')} /></FormGroup>
            <FormGroup><label>Cidade</label><input type="text" value={formData.city} onChange={(e) => handleInputChange(e, 'city')} /></FormGroup>
            <Row>
              <FormGroup><label>CEP</label><input type="text" value={formData.zipCode} onChange={(e) => handleInputChange(e, 'zipCode')} /></FormGroup>
              <FormGroup><label>Número</label><input type="text" value={formData.number} onChange={(e) => handleInputChange(e, 'number')} /></FormGroup>
            </Row>
            <FormGroup><label>Complemento (opcional)</label><input type="text" value={formData.complement} onChange={(e) => handleInputChange(e, 'complement')} /></FormGroup>
            <BotaoPrincipal onClick={() => setEtapa("pagamento")}>Continuar com o pagamento</BotaoPrincipal>
            <BotaoPrincipal onClick={() => setEtapa("carrinho")}>Voltar para o carrinho</BotaoPrincipal>
          </>
        )}

        {etapa === "pagamento" && (
          <>
            <h3>Pagamento - Valor a pagar {formatarValor(total)}</h3>
            <FormGroup><label>Nome no cartão</label><input type="text" value={formData.cardName} onChange={(e) => handleInputChange(e, 'cardName')} /></FormGroup>
            <Row payment>
              <FormGroup><label>Número do cartão</label><input type="text" value={formData.cardNumber} onChange={(e) => handleInputChange(e, 'cardNumber')} /></FormGroup>
              <FormGroup><label>CVV</label><input type="text" value={formData.cardCode} onChange={(e) => handleInputChange(e, 'cardCode')} /></FormGroup>
            </Row>
            <Row>
              <FormGroup><label>Mês de vencimento</label><input type="text" value={formData.expiresMonth} onChange={(e) => handleInputChange(e, 'expiresMonth')} /></FormGroup>
              <FormGroup><label>Ano de vencimento</label><input type="text" value={formData.expiresYear} onChange={(e) => handleInputChange(e, 'expiresYear')} /></FormGroup>
            </Row>
            <BotaoPrincipal disabled={isLoading} onClick={concluirPedido}>
              {isLoading ? "Processando..." : "Finalizar pagamento"}
            </BotaoPrincipal>
            <BotaoPrincipal onClick={() => setEtapa("endereco")}>Voltar para a entrega</BotaoPrincipal>
          </>
        )}

        {etapa === "confirmacao" && (
          <>
            <h3>Pedido realizado - {orderId}</h3>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <BotaoPrincipal onClick={handleClose}>Concluir</BotaoPrincipal>
          </>
        )}
      </SidebarContainer>
    </Overlay>
  );
}