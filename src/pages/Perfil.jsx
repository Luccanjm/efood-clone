import { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from "../context/CartContext";
import HeaderPerfil from '../components/HeaderPerfil';
import ProdutoCardPerfil from "../components/ProdutoCardPerfil";
import CarrinhoSidebar from "../components/CarrinhoSidebar";
import Modal from "../components/Modal";
import Footer from '../components/Footer';
import PizzaImg from '../assets/pizza.png';
import MacarraoImg from '../assets/macarrao.png';

const Hero = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 32px 0;

  &::after {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    color: #fff;
  }
`;

const ListContainer = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;

export default function Perfil() {
  const [modalProduto, setModalProduto] = useState(null);
  const { addToCart } = useContext(CartContext);

  const produtoExemplo = {
    id: 1,
    nome: "Pizza Marguerita",
    img: PizzaImg,
    preco: "R$ 60,90",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite."
  };

  return (
    <>
      <HeaderPerfil />
      <Hero style={{ backgroundImage: `url(${MacarraoImg})` }}>
        <div className="container">
          <p style={{ fontSize: '32px', fontWeight: '100' }}>Italiana</p>
          <h2 style={{ fontSize: '32px', fontWeight: '900' }}>La Dolce Vita Trattoria</h2>
        </div>
      </Hero>
      
      <ListContainer>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProdutoCardPerfil 
            key={i} 
            img={PizzaImg} 
            onMaisDetalhes={() => setModalProduto(produtoExemplo)} 
          />
        ))}
      </ListContainer>

      {modalProduto && (
        <Modal 
          produto={modalProduto} 
          onClose={() => setModalProduto(null)} 
          onAdd={() => {
            addToCart(modalProduto);
            setModalProduto(null);
          }}
        />
      )}

      <CarrinhoSidebar />
      <Footer />
    </>
  );
}