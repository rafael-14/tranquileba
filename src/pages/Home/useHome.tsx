import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharacters } from "rickmortyapi";

export default function useHome() {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [characters, setCharacters] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [pages, setPages] = useState<any>(Number);
  const [page] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(page.get("page")) || 1);

  function handleSearch() {
    if (currentPage !== 1) return setCurrentPage(1);
    loadCharacters();
  }

  async function loadCharacters() {
    await getCharacters({
      name: searchText,
      page: currentPage,
    }).then((result) => {
      if (result.status === 404) return setNotFound(true);
      setCharacters(result.data.results);
      setPages(result.data.info?.pages);
      setLoading(false);
      setNotFound(false);
    });
  }

  useEffect(() => {
    loadCharacters();
  }, [currentPage]);

  useEffect(() => {
    if (searchText === "") handleSearch();
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
