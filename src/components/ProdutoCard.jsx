import styled from "styled-components";
import estrela from "../assets/estrela.png";

const Card = styled.div`
  border: 1px solid #E66767;
  background: #fff;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

const Tag = styled.span`
  background: #E66767;
  color: #FFEBD9;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  display: inline-block;
`;

const Conteudo = styled.div`
  padding: 8px;
  border: 1px solid #E66767;
  border-top: none;
`;

const TituloLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Nome = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #E66767;
`;

const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #E66767;
  font-weight: 700;
  font-size: 18px;

  img {
    width: 21px;
    height: 21px;
  }
`;

const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #E66767;
  margin-bottom: 16px;
`;

const Botao = styled.button`
  background: #E66767;
  color: #FFEBD9;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export default function ProdutoCard({ restaurante, onClick }) {
  return (
    <Card>
      <Img src={restaurante.capa} alt={restaurante.titulo} />
      <Tags>
        {restaurante.destacado && <Tag>Destaque do dia</Tag>}
        <Tag>{restaurante.tipo}</Tag>
      </Tags>

      <Conteudo>
        <TituloLinha>
          <Nome>{restaurante.titulo}</Nome>
          <NotaContainer>
            {restaurante.avaliacao}
            <img src={estrela} alt="estrela" />
          </NotaContainer>
        </TituloLinha>

        <Descricao>{restaurante.descricao}</Descricao>

        <Botao onClick={onClick}>Saiba mais</Botao>
      </Conteudo>
    </Card>
  );
}