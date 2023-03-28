import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function useFavorites() {
  const [notFavorite, setNotFavorite] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    async function loadFavorites() {
      setNotFavorite(!(favorites.length > 0));
    }
    loadFavorites();
  }, [favorites]);

  return {
    notFavorite,
    favorites,
  };
}
