import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import logo from "../assets/logo.png";
import fundo from "../assets/fundo.png";

const HeaderBar = styled.header`
  background-image: url(${fundo});
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  a, span {
    color: #E66767;
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 125px;
`;

export default function HeaderPerfil() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <HeaderBar>
      <a href="/">Restaurantes</a>
      <Logo src={logo} alt="efood" />
      <span onClick={() => dispatch(toggleCart())}>
        {items.length} produto(s) no carrinho
      </span>
    </HeaderBar>
  );
}