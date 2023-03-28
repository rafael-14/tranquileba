import { createContext, ReactNode, useState } from "react";

type FavoritesContextProviderProps = {
  children: ReactNode;
};

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type?: string;
};

type FavoritesContextType = {
  favorites: Character[];
  updateFavorites: (character: Character) => void;
};

export const FavoritesContext = createContext({} as FavoritesContextType);

export default function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    const storagedFavorites = localStorage.getItem("@RickAndMorty:favorites");
    return storagedFavorites ? JSON.parse(storagedFavorites) : [];
  });

  function updateFavorites(character: Character) {
    const characterAlreadyInFavorites = favorites.find(
      (characterItem) => characterItem.id === character.id
    );
    if (!characterAlreadyInFavorites) {
      setFavorites((prevState) => {
        return [...prevState, { ...character }];
      });
      localStorage.setItem(
        "@RickAndMorty:favorites",
        JSON.stringify([...favorites, { ...character }])
      );
      return;
    }

    const updatedFavorites = favorites.filter(
      (favoritesItem) => favoritesItem.id !== character.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem(
      "@RickAndMorty:favorites",
      JSON.stringify(updatedFavorites)
    );
  }

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
