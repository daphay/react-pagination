import React from 'react';

const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
   const  paginationRange = useMemo(() => {

   },[totalCount, pageSize, siblingCount, currentPage]);

   return paginationRange
};
export default usePagination;