import { useCallback, useEffect } from "react";
import { SearchContainer } from "./styles";

type SearchProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
};

export default function Search({
  searchText,
  setSearchText,
  onSearch,
}: SearchProps): JSX.Element {
  function eventListener(e: any) {
    if (e.key === "Enter") {
      onSearch();
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", eventListener);

    return () => {
      document.removeEventListener("keypress", eventListener);
    };
  });

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Pesquise seu personagem..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onSearch}>Pesquisar</button>
    </SearchContainer>
  );
}
