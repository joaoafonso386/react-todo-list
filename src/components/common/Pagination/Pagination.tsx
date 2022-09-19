import { useState } from "react";
import "./Pagination.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface IPagination {
  data: React.ReactElement[];
  todosPerPage: number;
}

const CustomButton = styled(Button)({
  color: "black",
  border: "1px solid black",
  "&:hover": {
    border: "1px solid black",
  },
});

const Pagination: React.FC<IPagination> = ({ data, todosPerPage }) => {
  const FIRST_PAGE = 1;
  const LAST_PAGE = Math.ceil(data.length / todosPerPage);
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

  const paginateData = () => {
    const initialPageIndex = currentPage * todosPerPage - todosPerPage;
    const finalPageIndex = currentPage * todosPerPage;
    return data.slice(initialPageIndex, finalPageIndex);
  };

  return (
    <div>
      <div className="list-container">
        {paginateData()}
        <div className="pagination">
          <CustomButton
            variant="outlined"
            size="small"
            data-testid="prev-page-button"
            type="button"
            onClick={() =>
              currentPage === FIRST_PAGE
                ? setCurrentPage(FIRST_PAGE)
                : setCurrentPage((page) => page - 1)
            }
          >
            prev
          </CustomButton>
          <div data-testid="current-page">{currentPage}</div>
          <CustomButton
            type="button"
            variant="outlined"
            size="small"
            data-testid="next-page-button"
            onClick={() =>
              currentPage === LAST_PAGE
                ? setCurrentPage(LAST_PAGE)
                : setCurrentPage((page) => page + 1)
            }
          >
            next
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
