import Search from "../../components/Search";
import Card from "../../components/Card";
import { HomeContainer, Loader, NotFoundDiv } from "./styles";
import notFoundImg from "../../assets/images/not-found.png";
import useHome from "./useHome";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

export default function Home(): JSX.Element {
  const {
    searchText,
    setSearchText,
    loading,
    notFound,
    characters,
    currentPage,
    pages,
  } = useHome();

  return (
    <HomeContainer>
      {loading ? (
        <Loader>
          <Spinner />
        </Loader>
      ) : notFound ? (
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
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Card characters={characters} />

          <Pagination currentPage={currentPage} pages={pages} />
        </>
      )}
    </HomeContainer>
  );
}
