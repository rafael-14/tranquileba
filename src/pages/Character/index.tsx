import Spinner from "../../components/Spinner";
import { CardContainer, CardContent, GridDiv } from "./styles";
import useCharacter from "./useCharacter";

export default function Character() {
  const { isLoading, character, updateFavorites, favorites } = useCharacter();

  if (!character) return null;

  return (
    <GridDiv>
      {!isLoading ? (
        <CardContainer>
          <img src={character.image} alt={character.name} />
          <div
            className="favorite-button"
            onClick={() => updateFavorites(character)}
          >
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
          <CardContent>
            <div>
              <h3>{character.name}</h3>
              <p>{character.species && `Espécie: ${character.species}`}</p>
              <p>
                {character.origin.name && `Origem: ${character.origin.name}`}
              </p>
              <p>
                {character.location.name &&
                  `Localização Atual: ${character.location.name}`}
              </p>
              <p>{character.gender && `Gênero: ${character.gender}`}</p>
            </div>
          </CardContent>
        </CardContainer>
      ) : (
        <Spinner />
      )}
    </GridDiv>
  );
}
