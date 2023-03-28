import { useEffect, useState } from "react";
import api from "../../services/api";
import { useSearchParams } from "react-router-dom";

export default function useHome() {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pages, setPages] = useState(Number);
  const [page] = useSearchParams();
  const currentPage = Number(page.get("page")) || 1;

  useEffect(() => {
    async function loadCharacters() {
      try {
        const { data } = await api.get(
          searchText === ""
            ? `/character/?page=${currentPage}`
            : `/character/?name=${searchText}`
        );
        setCharacters(data.results);
        setPages(data.info.pages);
        setLoading(false);
        setNotFound(false);
      } catch {
        setNotFound(true);
      }
    }

    loadCharacters();
  }, [searchText, currentPage]);

  return {
    searchText,
    setSearchText,
    loading,
    notFound,
    characters,
    currentPage,
    pages,
  };
}
