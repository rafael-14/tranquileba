import { useEffect, useState } from "react";
import Container from "./styles";

type PaginationProps = {
  currentPage: number;
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  currentPage,
  pages,
  setCurrentPage,
}: PaginationProps) {
  const [arr, setArr] = useState<Array<number>>([1, 2, 3]);

  useEffect(() => {
    setArr(
      Array.from(
        Array(3),
        (_, i) =>
          i +
          currentPage -
          (currentPage !== 1 ? 1 : 0) -
          (currentPage === pages ? 1 : 0)
      )
    );
  }, [currentPage]);

  if (pages === 1) return null;

  return (
    <Container>
      {currentPage > 2 && (
        <>
          <a onClick={() => setCurrentPage(currentPage - 1)}>&lang;&lang;</a>
          <a
            onClick={() => setCurrentPage(1)}
            className={(currentPage === 1 && "active") || ""}
          >
            1
          </a>
        </>
      )}

      {currentPage >= 4 && <div className="ellipsis">...</div>}

      {arr.map((row) => (
        <div key={row}>
          <a
            onClick={() => setCurrentPage(row)}
            className={
              Number(currentPage) === row || (!currentPage && !row)
                ? "active"
                : ""
            }
          >
            {row}
          </a>
        </div>
      ))}

      {currentPage <= pages - 3 && <div className="ellipsis">...</div>}

      {currentPage < pages - 1 && (
        <>
          <a
            onClick={() => setCurrentPage(pages)}
            className={(currentPage === 43 && "active") || ""}
          >
            {pages}
          </a>
          <a onClick={() => setCurrentPage(currentPage + 1)}>&rang;&rang;</a>
        </>
      )}
    </Container>
  );
}
