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
