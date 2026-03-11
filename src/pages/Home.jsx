import Header from "../components/Header";
import Footer from "../components/Footer";
import ProdutoCard from "../components/ProdutoCard";
import { useNavigate } from "react-router-dom";
import Sushi from "../assets/sushi.png";
import Macarrao from "../assets/macarrao.png";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 478px);
  gap: 32px;
  justify-content: center;
  padding: 40px 0;
  background-color: #FFF8F2;

`;

export default function Home() {
  const navigate = useNavigate();

  const restaurantes = [
    {
      id: 1,
      nome: "Hioki Sushi",
      img: Sushi,
      nota: 4.9,
      tags: ["Destaque da semana", "Japonesa"],
      descricao:
        "Peça já o melhor da culinária japonesa no conforto da sua casa. Sushi fresco, sashimi delicado e pratos quentes irresistíveis."
    },
    {
      id: 2,
      nome: "La Dolce Vita Trattoria",
      img: Macarrao,
      nota: 4.6,
      tags: ["Italiana"],
      descricao:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Delicie-se com massas frescas, pizzas e risotos."
    },
    {
      id: 3,
      nome: "La Dolce Vita Trattoria",
      img: Macarrao,
      nota: 4.6,
      tags: ["Italiana"],
      descricao:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Delicie-se com massas frescas, pizzas e risotos."
    },
    {
      id: 4,
      nome: "La Dolce Vita Trattoria",
      img: Macarrao,
      nota: 4.6,
      tags: ["Italiana"],
      descricao:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Delicie-se com massas frescas, pizzas e risotos."
    },
    {
      id: 5,
      nome: "La Dolce Vita Trattoria",
      img: Macarrao,
      nota: 4.6,
      tags: ["Italiana"],
      descricao:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Delicie-se com massas frescas, pizzas e risotos."
    },
    {
      id: 6,
      nome: "La Dolce Vita Trattoria",
      img: Macarrao,
      nota: 4.6,
      tags: ["Italiana"],
      descricao:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Delicie-se com massas frescas, pizzas e risotos."
    }
  ];

  return (
    <>
      <Header />

      <Container>
        {restaurantes.map((r) => (
          <ProdutoCard
            key={r.id}
            produto={r}
            onClick={() => navigate(`/perfil/${r.id}`)}
          />
        ))}
      </Container>

      <Footer />
    </>
  );
}