import styled from 'styled-components';

const Card = styled.div`
  background-color: #E66767;
  padding: 8px;
  color: #FFEBD9;
  display: flex;
  flex-direction: column;
`;

const Foto = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`;

const Nome = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`;

const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BotaoAdicionar = styled.button`
  width: 100%;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 0;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto; 
`;

export default function ProdutoCardPerfil({ item, onMaisDetalhes }) {
  
  const getDescricao = (descricao) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + "...";
    }
    return descricao;
  };

  return (
    <Card>
      <Foto src={item.foto} alt={item.nome} />
      <Nome>{item.nome}</Nome>
      <Descricao>
        {getDescricao(item.descricao)}
      </Descricao>
      <BotaoAdicionar onClick={onMaisDetalhes}>
        Mais detalhes
      </BotaoAdicionar>
    </Card>
  );
}