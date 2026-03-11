import styled from "styled-components";
import fechar from "../assets/close.png";

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
    max-height: 90vh;
    overflow-y: auto;
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

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

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

export default function Modal({ produto, onClose, onAdd }) {
  if (!produto) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseIcon src={fechar} alt="Fechar" onClick={onClose} />
        <Imagem src={produto.img} alt={produto.nome} />
        <Content>
          <h3>{produto.nome}</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.<br /><br />
            Serve: de 2 a 3 pessoas
          </p>
          <button onClick={onAdd}>
            Adicionar ao carrinho - {produto.preco}
          </button>
        </Content>
      </ModalBox>
    </Overlay>
  );
}