'use client';
import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') ?? '1');
  const per_page = parseInt(searchParams.get('per_page') ?? '5');

  const changePage = (newPage: number) => {
    // Ensure the page is within the allowed range
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`/blogs?page=${newPage}`);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-16 ">
      <button
        className={`flex justify-center items-center h-12 rounded-md px-6 text-base bg-primary text-primary-foreground shadow-lg shadow-shadow  active:translate-y-[2px] hover:bg-primary/90 normal-case ${
          currentPage === 1
            ? 'bg-[#0070CB] text-white cursor-not-allowed'
            : 'bg-[#0070CB] text-white'
        }`}
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      {/* 
      {[...Array(totalPages).keys()].map((index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 rounded-full ${
            currentPage === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </button>
      ))} */}

      <button
        className={`flex justify-center items-center h-12 rounded-md px-6 border border-border bg-background text-primary shadow-sm hover:bg-accent hover:text-accent-foreground normal-case ${
          currentPage >= totalPages ? ' cursor-not-allowed' : ''
        }`}
        disabled={currentPage >= totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
