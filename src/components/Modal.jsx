import styled from "styled-components";
import fechar from "../assets/close.png";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const ModalBox = styled.div`
  background: #E66767;
  padding: 32px;
  position: relative;
  max-width: 1024px;
  width: 90%;
  display: flex;
  color: #FFFFFF;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

const Imagem = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  h3 { font-size: 18px; font-weight: 900; margin-bottom: 16px; }
  p { font-size: 14px; line-height: 22px; margin-bottom: 24px; }

  button {
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    padding: 4px 8px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
  }
`;

export default function Modal({ produto, onClose }) {
  const dispatch = useDispatch();

  if (!produto) return null;

  const handleAddToCart = () => {
    dispatch(add(produto));
    onClose();
  };

  const formatarPreco = (valor) => {
    if (typeof valor === 'number') {
      return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return valor;
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseIcon src={fechar} alt="Fechar" onClick={onClose} />
        <Imagem src={produto.foto} alt={produto.nome} />
        <Content>
          <h3>{produto.nome}</h3>
          <p>
            {produto.descricao}
            <br /><br />
            Serve: {produto.porcao}
          </p>
          <button onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatarPreco(produto.preco)}
          </button>
        </Content>
      </ModalBox>
    </Overlay>
  );
}