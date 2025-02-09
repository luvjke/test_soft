import React from 'react';
import { Button } from 'src/components/ui/Button';

import style from './Pagination.module.scss';
import { PaginationProps } from './Pagination.props';

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      pages.push(i);
    }
  }

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={style.container}>
      <Button
        version={'pagination_pn'}
        label={'Previous'}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1 || totalPages === 0}
      />
      {pages.map((page) => {
        const isDisabled = page < 1 || page > totalPages;
        const isActive = page === currentPage;
        return (
          <Button
            key={page}
            version={'pagination'}
            label={page.toString()}
            onClick={() => handlePageClick(page)}
            disabled={isDisabled}
            active={isActive}
          />
        );
      })}
      <Button
        version={'pagination_pn'}
        label={'Next'}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
      />
    </div>
  );
};
