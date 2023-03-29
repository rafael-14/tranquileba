import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "rickmortyapi";
import { FavoritesContext } from "../../contexts/FavoritesContext";

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  gender: string;
  type: string;
  like?: boolean;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};

export default function useCharacter() {
  const [character, setCharacter] = useState<Character | any>();
  const [isLoading, setIsLoading] = useState(true);
  const { id }: any = useParams();
  const { favorites, updateFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    async function loadCharacter() {
      try {
        setIsLoading(true);
        const { data } = await getCharacter(id);
        setCharacter(data);
        setIsLoading(false);
      } catch {}
    }
    loadCharacter();
  }, []);

  return {
    isLoading,
    character,
    updateFavorites,
    favorites,
  };
}
