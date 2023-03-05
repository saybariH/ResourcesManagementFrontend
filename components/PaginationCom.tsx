import React from 'react';
import classnames from 'classnames';

// import './pagination.scss';
import { usePagination } from '@/code/PaginationCode/usePagination';
const Pagination = (props:any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange === undefined ||paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
        onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1){
        onPageChange(currentPage - 1);
    }
    
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav aria-label="Page navigation example">
    <ul
      className={classnames('pagination justify-content-center my-5 ', { [className]: className })}
    >
      <li
        className={classnames('page-item ', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <a className="page-link" href="#" style={{color:'#15a362'}}  aria-disabled="true" > Previous </a>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === "...") {
          return <li className="page-item dots ">&#8230;</li>;
        }

        return (
          <li
            className={classnames('page-item ', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <a className='page-link' style={{color:'#15a362'}} href="#">{pageNumber}</a>
          </li>
        );
      })}
      <li
        className={currentPage === lastPage ? 'page-item disabled':'page-item disabled'}

        // {classnames('page-item ', {
        //   disabled: currentPage === lastPage
        // })}
        onClick={onNext}
      >
        <a className="page-link" href="#" style={{color:'#15a362'}} >Next</a> 
      </li>
    </ul>
    </nav>
  );
};

export default Pagination;
