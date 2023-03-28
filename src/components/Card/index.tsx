import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
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
            <img src={character.image} alt={character.name} />
            <div onClick={() => updateFavorites(character)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill={`${
                  favorites.find(
                    (favoritesItem) => favoritesItem.id === character.id
                  )
                    ? "#00abc1"
                    : "none"
                }`}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          </ImgDiv>

          <CardContent>
            <div>
              <h3>{character.name}</h3>
            </div>
            <div>
              <p>{character.species}</p>
              <p>{character.type}</p>
            </div>
          </CardContent>
        </CardContainer>
      ))}
    </GridDiv>
  );
}
