

interface PaginateProps {
  page: number;
  lastPage: number;
  onPageChange: (newPage: number) => void;
}

export function Paginate({ page, lastPage, onPageChange }: PaginateProps) {
  return (
    <nav>
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => onPageChange(Math.max(page - 1, 1))}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight border rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Previous
          </button>
        </li>
        <li>
          <button
            onClick={() => onPageChange(page)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {page}
          </button>
        </li>
        <li>
          <button
            onClick={() => onPageChange(Math.min(page + 1, lastPage))}
            className="flex items-center justify-center px-3 h-8 leading-tight border rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
