import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ff6b6b;
  background: #fff;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

const Tags = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`;

const Tag = styled.span`
  background: #ff6b6b;
  color: #fff;
  font-size: 12px;
  padding: 4px 6px;
`;

const Conteudo = styled.div`
  padding: 8px;
`;

const TituloLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nome = styled.h3`
  font-size: 18px;
  margin: 8px 0;
  color: #ff6b6b;
`;

const Nota = styled.span`
  font-size: 18px;
  color: #ff6b6b;
`;

const Descricao = styled.p`
  font-size: 14px;
  color: #ff6b6b;
  margin-bottom: 12px;
`;

const Botao = styled.button`
  background: #ff6b6b;
  color: #fff;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
`;

export default function ProdutoCard({ produto, onClick }) {
  return (
    <Card>
      <ImgContainer>
        <Img src={produto.img} alt={produto.nome} />

        <Tags>
          {produto.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </ImgContainer>

      <Conteudo>
        <TituloLinha>
          <Nome>{produto.nome}</Nome>
          <Nota>{produto.nota} ⭐</Nota>
        </TituloLinha>

        <Descricao>{produto.descricao}</Descricao>

        <Botao onClick={onClick}>Saiba mais</Botao>
      </Conteudo>
    </Card>
  );
}