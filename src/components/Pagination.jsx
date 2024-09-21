import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import usePagination, { DOTS } from "../hooks/usePagination";
import { IconButton, TextButton } from "./Button";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex w-fit flex-wrap items-center justify-center gap-4">
      <IconButton
        leftIcon={faArrowLeft}
        clickHandler={onPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </IconButton>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <span key={index} className="text-2xl font-bold">
              {DOTS}
            </span>
          );
        }
        return (
          <TextButton
            key={index}
            className={`grid size-8 place-content-center rounded-lg p-3 text-base font-semibold ${pageNumber === currentPage && "bg-sec-500"}`}
            clickHandler={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </TextButton>
        );
      })}
      <IconButton
        rightIcon={faArrowRight}
        clickHandler={onNext}
        disabled={currentPage === lastPage}
      >
        Next
      </IconButton>
    </div>
  );
};

export default Pagination;
