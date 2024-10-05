import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

// Hooks
import usePagination, { DOTS } from "../hooks/usePagination";

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
      <button
        disabled={currentPage === 1}
        className="btn btn-pry"
        onClick={onPrevious}
      >
        <ArrowLeftIcon className="size-6" />
        Previous
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <span key={index} className="text-2xl font-bold">
              {DOTS}
            </span>
          );
        }
        return (
          <button
            key={index}
            className={`grid size-8 place-content-center rounded-lg p-3 text-base font-semibold ${pageNumber === currentPage && "bg-sec-500"}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        disabled={currentPage === lastPage}
        className="btn btn-pry"
        onClick={onNext}
      >
        Next
        <ArrowRightIcon className="size-6" />
      </button>
    </div>
  );
};

export default Pagination;
