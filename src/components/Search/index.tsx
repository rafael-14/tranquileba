import { ChangeEvent } from "react";
import { SearchContainer } from "./styles";

type SearchProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({
  searchText,
  setSearchText,
}: SearchProps): JSX.Element {
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);
  }

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Pesquise seu personagem..."
        value={searchText}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}
