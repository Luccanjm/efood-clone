import styled from "styled-components";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";


const FooterContainer = styled.footer`
  background-color: #FFEBD9;
  text-align: center;
  padding: 16px;
  margin-top: 32px;
  font-size: 0.8rem;
  color: #aaa;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const LogoImg = styled.img`
  width: 125px;
`;

const LogoRedes = styled.img`
  width: 25px;
`;

const TextFooter = styled.text`
  font-size:12px;
  color:#E66767;
  margin-bottom: 20px;
`;

const ContainerRedes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:70px;
  margin-top:30px;

  img {
    margin-right: 10px;
  }

  img:last-child {
    margin-right: 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <LogoImg src={Logo} alt="efood" />
      <ContainerRedes>
        <LogoRedes src={Instagram}></LogoRedes>
        <LogoRedes src={Facebook}></LogoRedes>
        <LogoRedes src={Twitter}></LogoRedes>
      </ContainerRedes>

      <TextFooter>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade 
        <br/> dos produtos é toda do estabelecimento contratado. </TextFooter>
    </FooterContainer>
  );
}