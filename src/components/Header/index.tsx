import { Link, useLocation } from "react-router-dom";
import heartImg from "../../assets/images/heart.svg";
import homeImg from "../../assets/images/home.svg";
import rickAndMortyImg from "../../assets/images/rick-morty.png";
import { HeaderContainer, HeaderTag, ImgDiv } from "./styles";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <HeaderTag>
      <HeaderContainer>
        <h1>RICK &amp; MORTY</h1>
        <Link to={pathname === "/" ? "/favorites" : "/"}>
          <button>
            <img
              src={pathname === "/" ? heartImg : homeImg}
              alt="Ícone do botão"
            />
            {pathname === "/" ? "Favoritos" : "Home"}
          </button>
        </Link>
      </HeaderContainer>
      <ImgDiv>
        <img src={rickAndMortyImg} alt="Imagem de Rick and Morty" />
      </ImgDiv>
    </HeaderTag>
  );
}
