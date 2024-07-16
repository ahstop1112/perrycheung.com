import { useContext } from 'react';
import { PortfolioContext } from 'core/store/providers/Portfolio';
// import useApiHandler from 'core/store/hooks/useApiHandler';
// import { getPortfolioById, searchPortfolioByPage, sendReplyPortfolio } from 'core/services/Portfolio/Portfolio';

const usePortfolio = () => {
  const Portfolio = useContext(PortfolioContext);
  const { state: PortfolioState, dispatch } = Portfolio;
  const { formInputs, pageSize, pageIndex, formActions, searchType } = PortfolioState;
  // const { dispatch: apiHandlerDispatch } = useApiHandler();

  // const updateSearchResult = () => {
  //   const searchData = searchApiData('searchInputs', searchType);
  //   dispatch({ type: 'SET_LOADING', isLoading: false });

  //   searchPortfolioByPage(pageSize, pageIndex, searchData)
  //     .then(
  //       (res) =>
  //         res.data?.data?.data &&
  //         dispatchSearchResult(res.data?.data?.data, pageSize, pageIndex, res.data?.data?.total),
  //     )
  //     .catch((error) => apiHandlerDispatch({ type: 'HANDLE_ERROR', error }))
  //     .finally(() => dispatch({ type: 'SET_LOADING', isLoading: false }));
  // };

  // const getFieldsByPageAction = (pageAction, PortfolioId) => {
  //   let changeFormInputs = {};
  //   const formKey = '';

  //   switch (pageAction) {
  //     case 'reply': {
  //       getPortfolioById(PortfolioId)
  //         .then((res) => {
  //           if (res?.data?.status === 0) {
  //             changeFormInputs = updateFields(`reportForm/reply`, res?.data?.data?.data[0]);
  //             dispatchFormDetailsById(formKey, formActions, changeFormInputs, pageAction);
  //           }
  //         })
  //         .catch((error) => apiHandlerDispatch({ type: 'HANDLE_ERROR', error }));
  //       break;
  //     }
  //     case 'details': {
  //       getPortfolioById(PortfolioId)
  //         .then((res) => {
  //           if (res?.data?.status === 0) {
  //             changeFormInputs = updateFields(`reportForm/details`, res?.data?.data?.data[0]);
  //             dispatchFormDetailsById(formKey, formActions, changeFormInputs, pageAction);
  //           }
  //         })
  //         .catch((error) => apiHandlerDispatch({ type: 'HANDLE_ERROR', error }));
  //       break;
  //     }
  //     default:
  //     // console.log(pageAction);
  //   }
  // };

  return {
    Portfolio,
    PortfolioState,
    dispatch,
    // getFieldsByPageAction,
    // updateSearchResult,
  };
};

export default usePortfolio;
