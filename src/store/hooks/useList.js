const useList = (listContext) => {
  const dispatch = listContext?.dispatch;
  const pageSize = 20;

  // rows per page
  const handleChangeRowsPerPage = (e) =>
    dispatch({ type: 'SET_PAGE_SIZE', pageSize: parseInt(e.target.value, 10), pageIndex: 0, isLoading: true });

  const handleChangePage = (e, newPage) => dispatch({ type: 'SET_PAGE_SIZE', pageSize, pageIndex: newPage, isLoading: true });

  const handleSort = (sortColumnId) => {
    if (!sortColumnId.includes('view') && !sortColumnId.includes('add') && !sortColumnId.includes('edit'))
      dispatch({ type: 'SET_SORT', sortColumnId, isLoading: true });
  };

  return { handleChangeRowsPerPage, handleChangePage, handleSort };
};

export default useList;
