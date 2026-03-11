import styled from "styled-components";

const SidebarContainer = styled.aside`
  background-color: #E66767;
  width: 360px;
  height: 100%;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  color: #FFEBD9;

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    background-color: #FFEBD9;
    border: 2px solid #FFEBD9;
    height: 32px;
    padding: 0 8px;
    font-weight: 700;
    color: #4B4B4B;
    outline: none;
    width: 100%;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BotaoPrincipal = styled.button`
  width: 100%;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export default function CheckoutEndereco({ onBack }) {
  return (
    <SidebarContainer>
      <h3>Entrega</h3>
      <form>
        <FormGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input type="text" id="receiver" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="address">Endereço</label>
          <input type="text" id="address" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" />
        </FormGroup>

        <Row>
          <FormGroup>
            <label htmlFor="zip">CEP</label>
            <input type="text" id="zip" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="number">Número</label>
            <input type="text" id="number" />
          </FormGroup>
        </Row>

        <FormGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input type="text" id="complement" />
        </FormGroup>

        <ButtonContainer>
          <BotaoPrincipal type="button">
            Continuar com o pagamento
          </BotaoPrincipal>
          <BotaoPrincipal type="button" onClick={onBack}>
            Voltar para o carrinho
          </BotaoPrincipal>
        </ButtonContainer>
      </form>
    </SidebarContainer>
  );
}