import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProdutoCard from "../components/ProdutoCard";

const PageWrapper = styled.div`
  background-color: #FFF8F2;
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas flexíveis */
  column-gap: 80px; /* Espaçamento lateral maior conforme o design */
  row-gap: 48px; /* Espaçamento vertical entre os cards */
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    justify-items: center;
  }
`;

const Message = styled.h2`
  text-align: center;
  color: #E66767;
  margin-top: 50px;
`;

export default function Home() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Chamada AJAX utilizando Fetch API
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao carregar os dados da API");
        }
        return res.json();
      })
      .then((data) => {
        setRestaurantes(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <PageWrapper>
      <Header />
      <Message>Carregando restaurantes...</Message>
    </PageWrapper>
  );

  if (erro) return (
    <PageWrapper>
      <Header />
      <Message>Ops! algo deu errado: {erro}</Message>
    </PageWrapper>
  );

  return (
    <PageWrapper>
      <Header />

      <Container>
        {restaurantes.map((restaurante) => (
          <ProdutoCard
            key={restaurante.id}
            restaurante={restaurante} 
            onClick={() => navigate(`/perfil/${restaurante.id}`)}
          />
        ))}
      </Container>

      <Footer />
    </PageWrapper>
  );
}