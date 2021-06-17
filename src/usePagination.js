import {useMemo} from 'react';
export const DOTS = '...';

//page Range
const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({length}, (_,idx) => idx + start);
};

export const usePagination = ({
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
     const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

     const firstPageIndex = 1;
     const lastPageIndex = totalPageCount;

     //where right dots exist
     if(!shouldShowLeftDots && shouldShowRightDots){
         let leftItemCount = 3 + 2 * siblingCount;
         let leftRange = range (1, leftItemCount);
         return[...leftRange, DOTS, totalPageCount];
     }

     //where left dots exist
     if(shouldShowLeftDots && !shouldShowRightDots){
        let rightItemCount = 3 + 2 * siblingCount;
        let RightRange = range (totalPageCount - rightItemCount, totalPageCount);
        return[firstPageIndex, DOTS, ...RightRange];
    }

    //where both left and right dots exist
    if(shouldShowLeftDots && shouldShowRightDots){
        let middleRange = range (leftSiblingIndex, rightSiblingIndex);
        return[firstPageIndex, DOTS, ...middleRange, lastPageIndex];
    }

   },[totalCount, pageSize, siblingCount, currentPage]);

   return paginationRange
};