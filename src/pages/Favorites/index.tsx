import Card from "../../components/Card";
import { FavoritesContainer, NotFavoritesDiv } from "./styles";
import notFavoritesImg from "../../assets/images/not-favorites.ico";
import useFavorites from "./useFavorites";

export default function Favorites(): JSX.Element {
  const { notFavorite, favorites } = useFavorites();

  return (
    <FavoritesContainer>
      {notFavorite ? (
        <NotFavoritesDiv>
          <h3>Você não tem personagens favoritos</h3>
          <img src={notFavoritesImg} alt="Rick" />
        </NotFavoritesDiv>
      ) : (
        <>
          <h1>SUA LISTA DE FAVORITOS</h1>
          <Card characters={favorites} />
        </>
      )}
    </FavoritesContainer>
  );
}
