import React from 'react';
import style from './pagination.module.css';

export const PaginationDogs = ({ totalDogs, pageActual, dogsPerPage, setPageActual }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalDogs / dogsPerPage); index++) {
    pageNumbers.push(index);
  }

  const onPreviousPage = () => {
    setPageActual((prevPage) => prevPage - 1);
  };

  const onNextPage = () => {
    setPageActual((prevPage) => prevPage + 1);
  };

  const onSpecificPage = (pageNumber) => {
    setPageActual(pageNumber);
  };

  return (
    <div className={`${style.pagination} is-centered mb-6`} role='navigation' aria-label='pagination'>
      <button className={`${style['pagination-previous']} ${style['pagination-button']}`} disabled={pageActual <= 1} onClick={onPreviousPage}>
        Previous
      </button>
      <button
        className={`${style['pagination-next']} ${style['pagination-button']}`}
        disabled={pageActual >= pageNumbers.length}
        onClick={onNextPage}
      >
        Next
      </button>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${style['pagination-link']} ${pageActual === pageNumber ? style['active'] : ''}`}
            onClick={() => onSpecificPage(pageNumber)}
            disabled={pageNumber === pageActual}
          >
            {pageNumber}
          </button>
        ))}
      </ul>
    </div>
  );
};

