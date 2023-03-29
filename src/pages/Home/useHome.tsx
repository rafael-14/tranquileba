import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharacters } from "rickmortyapi";

export default function useHome() {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [characters, setCharacters] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [pages, setPages] = useState<any>(Number);
  const [page] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(page.get("page")) || 1);

  const handleSearch = useCallback(() => {
    setCurrentPage(1);
  }, []);

  async function loadCharacters() {
    try {
      const { data } = await getCharacters({
        name: searchText,
        page: currentPage,
      });
      setCharacters(data.results);
      setPages(data.info?.pages);
      setLoading(false);
      setNotFound(false);
    } catch {
      setNotFound(true);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, [currentPage]);

  useEffect(() => {
    if (searchText === "") {
      setCurrentPage(1);
      loadCharacters();
    }
  }, [searchText]);

  return {
    searchText,
    setSearchText,
    loading,
    notFound,
    characters,
    currentPage,
    pages,
    setCurrentPage,
    handleSearch,
  };
}
