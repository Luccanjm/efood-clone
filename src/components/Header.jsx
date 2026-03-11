import styled from "styled-components";
import Logo from "../assets/logo.png";
import Fundo from "../assets/fundo.png";

const HeaderContainer = styled.header`
  background-image: url(${Fundo});
  background-repeat: repeat;
  background-size: auto;
  padding: 64px 0;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 125px;
  margin-bottom: 24px;
`;

const Titulo = styled.h2`
  color: #ff6b6b;
  font-size: 36px;
  font-weight: bold;
  max-width: 540px;
  margin: 0 auto;
  line-height: 42px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="efood" />
      <Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </Titulo>
    </HeaderContainer>
  );
}