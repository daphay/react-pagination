import React from 'react';
import classnames from 'classnames';
import {usePagination, DOTS} from './usePagination';
import './pagination.scss';

const Pagination = props => {
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
}

export default Pagination;