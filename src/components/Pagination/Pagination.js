import { useState } from "react";

const Pagination = ({ data, todosPerPage }) => {
  const FIRST_PAGE = 1;
  const LAST_PAGE = Math.ceil(data.length / todosPerPage);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

  const paginateData = () => {
    const initialPageIndex = currentPage * todosPerPage - todosPerPage;
    const finalPageIndex = currentPage * todosPerPage;
    return data.slice(initialPageIndex, finalPageIndex);
  };

  return (
    <div>
      <div>{paginateData()}</div>
      <div className="pagination">
        <button
          data-testid="prev-page-button"
          type="button"
          onClick={() =>
            currentPage === FIRST_PAGE
              ? setCurrentPage(FIRST_PAGE)
              : setCurrentPage((page) => page - 1)
          }
        >
          prev
        </button>
        {currentPage}
        <button
          type="button"
          data-testid="next-page-button"
          onClick={() =>
            currentPage === LAST_PAGE
              ? setCurrentPage(LAST_PAGE)
              : setCurrentPage((page) => page + 1)
          }
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
