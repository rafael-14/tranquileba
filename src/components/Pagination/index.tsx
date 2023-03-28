import { useState } from "react";
import Container from "./styles";

type PaginationProps = {
  currentPage: number;
  pages: number;
};

export default function Pagination({ currentPage, pages }: PaginationProps) {
  const [arr] = useState(
    Array.from(
      Array(3),
      (_, i) =>
        i +
        currentPage -
        (currentPage !== 1 ? 1 : 0) -
        (currentPage === 42 ? 1 : 0)
    )
  );

  return (
    <Container>
      {currentPage > 2 && (
        <>
          <a href={`?page=${Number(currentPage) - 1}`}>&lang;&lang;</a>
          <a href={`?page=1`} className={(currentPage === 1 && "active") || ""}>
            1
          </a>
        </>
      )}

      {currentPage >= 4 && <div className="ellipsis">...</div>}

      {arr.map((row) => (
        <div key={row}>
          <a
            href={`?page=${row}`}
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

      {currentPage <= 39 && <div className="ellipsis">...</div>}

      {currentPage < pages - 1 && (
        <>
          <a
            href={`?page=${pages}`}
            className={(currentPage === 43 && "active") || ""}
          >
            {pages}
          </a>
          <a href={`?page=${Number(currentPage) + 1}`}>&rang;&rang;</a>
        </>
      )}
    </Container>
  );
}
