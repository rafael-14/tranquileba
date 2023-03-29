import Spinner from "../../components/Spinner";
import Svg from "../../components/Svg";
import { CardContainer, CardContent, GridDiv } from "./styles";
import useCharacter from "./useCharacter";

export default function Character() {
  const { isLoading, character, updateFavorites } = useCharacter();

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
            <Svg characterId={character.id}/>
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
