import styled from 'styled-components'

const Card = styled.div`
  background-color: #E66767;
  padding: 8px;
  color: #FFEBD9;
`

const Foto = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

const Nome = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

const BotaoAdicionar = styled.button`
  width: 100%;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 0;
  font-weight: 700;
  cursor: pointer;
`

export default function ProdutoCardPerfil({ img, onMaisDetalhes }) {
  return (
    <Card>
      <Foto src={img} alt="Pizza Marguerita" />
      <Nome>Pizza Marguerita</Nome>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <BotaoAdicionar onClick={onMaisDetalhes}>Mais detalhes</BotaoAdicionar>
    </Card>
  )
}