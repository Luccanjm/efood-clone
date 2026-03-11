import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderPerfil from '../components/HeaderPerfil';
import ProdutoCardPerfil from "../components/ProdutoCardPerfil";
import CarrinhoSidebar from "../components/CarrinhoSidebar";
import Modal from "../components/Modal";
import Footer from '../components/Footer';

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export default function Perfil() {
  const { id } = useParams(); // Pega o ID da URL
  const [restaurante, setRestaurante] = useState(null);
  const [modalProduto, setModalProduto] = useState(null);

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data));
  }, [id]);

  if (!restaurante) return null;

  return (
    <>
      <HeaderPerfil />
      <Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <p style={{ fontSize: '32px', fontWeight: '100' }}>{restaurante.tipo}</p>
          <h2 style={{ fontSize: '32px', fontWeight: '900' }}>{restaurante.titulo}</h2>
        </div>
      </Hero>
      
      <ListContainer>
        {restaurante.cardapio.map((item) => (
          <ProdutoCardPerfil 
            key={item.id} 
            item={item}
            onMaisDetalhes={() => setModalProduto(item)} 
          />
        ))}
      </ListContainer>

      {modalProduto && (
        <Modal 
          produto={modalProduto} 
          onClose={() => setModalProduto(null)} 
        />
      )}

      <CarrinhoSidebar />
      <Footer />
    </>
  );
}