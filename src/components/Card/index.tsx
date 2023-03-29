import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import Svg from "../Svg";
import { CardContainer, CardContent, GridDiv, ImgDiv } from "./styles";

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type?: string;
  like?: boolean;
};

type Characters = {
  characters: Array<Character> | [];
};

export default function Card({ characters }: Characters): JSX.Element {
  const { favorites, updateFavorites } = useContext(FavoritesContext);

  return (
    <GridDiv>
      {characters?.map((character) => (
        <CardContainer key={character.id}>
          <ImgDiv>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </Link>
            <div onClick={() => updateFavorites(character)}>
              <Svg characterId={character.id} />
            </div>
          </ImgDiv>

          <CardContent>
            <div>
              <h3>{character.name}</h3>
            </div>
          </CardContent>
        </CardContainer>
      ))}
    </GridDiv>
  );
}
