import React from 'react';

const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
   const  paginationRange = useMemo(() => {
     const totalPageCount = Math.ceil(totalCount/pageSize);
     const totalPageNumber = siblingCount + 5;

   //where page count is less that page number shown 
     if(totalPageNumber >= totalPageCount){
         return range(1, totalPageCount);
     }

     //left and right sibling calc(must be btw 1 and totalPageCount)
     const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
     const rightSiblingIndex = Math.max(currentPage + siblingCount, totalPageCount);
  
     //show dot logic
     const shouldShowLeftDots = leftSiblingIndex > 2
     const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2
     //page Range
     const range = (start, end) => {
         let length = end - start + 1;
         return Array.from({length}, (_,idx) => idx + start);
     };
   },[totalCount, pageSize, siblingCount, currentPage]);

   return paginationRange
};
export default usePagination;