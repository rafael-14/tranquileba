import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

type SvgProps = {
  characterId: number;
};

export default function Svg({ characterId }: SvgProps) {
  const { favorites } = useContext(FavoritesContext);

  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill={`${
          favorites.find((favoritesItem) => favoritesItem.id === characterId)
            ? "#00abc1"
            : "none"
        }`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
  );
}
