import notFoundImg from "../../assets/images/not-found.png";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import Spinner from "../../components/Spinner";
import { HomeContainer, Loader, NotFoundDiv } from "./styles";
import useHome from "./useHome";

export default function Home(): JSX.Element {
  const {
    searchText,
    setSearchText,
    loading,
    notFound,
    characters,
    pages,
    currentPage,
    setCurrentPage,
    handleSearch,
  } = useHome();

  return (
    <HomeContainer>
      {loading ? (
        <Loader>
          <Spinner />
        </Loader>
      ) : (
        <>
          <Search
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={handleSearch}
          />
          {notFound ? (
            <NotFoundDiv>
              <h3>
                Procuramos em todas as dimensões e não foi encontrado esse cara
              </h3>
              <img
                src={notFoundImg}
                alt="Rick e Morty procurando o personagem pelas dimensões"
              />
            </NotFoundDiv>
          ) : (
            <>
              <Card characters={characters} />
              <Pagination
                currentPage={currentPage}
                pages={pages}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </>
      )}
    </HomeContainer>
  );
}
