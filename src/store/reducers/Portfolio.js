import {
  updateSearchInputs,
  updateSearchLongInput,
  resetSearchInputs,
  updateNewFormInputs,
  updateMultipleFormInputs,
  getFormDetailsById,
  updateDropdownData,
  setTouched,
} from 'utility/index';

const PortfolioReducer = (state, action) => {
  const { formInputs, searchInputs, sortOrder } = state;

  switch (action.type) {
    case 'SET_SEARCH_TYPE': {
      const { open } = action;

      return {
        ...state,
        searchType: open ? 'hashtag' : 'advanced',
      };
    }
    case 'UPDATE_SEARCH_INPUT': {
      const { updateFormInput } = action;

      return {
        ...state,
        searchInputs: updateSearchInputs(searchInputs, 'search', updateFormInput),
      };
    }
    case 'UPDATE_SEARCH_LONG_INPUT_VALUE': {
      return {
        ...state,
        searchInputs: updateSearchLongInput(searchInputs, 'search'),
      };
    }
    case 'RESET_SEARCH_INPUT': {
      return {
        ...state,
        searchInputs: resetSearchInputs(searchInputs, 'search'),
      };
    }
    case 'SET_SEARCH_RESULT': {
      const { searchResult = [], searchWord, totalCount = 0, pageIndex = 0, pageSize = 20 } = action;

      searchResult.map((item) => {
        // item.id = item.PortfolioId;
        item.replyLink = `/cms/admin/report/reply?reportId=${item.id}`;
        item.detailsLink = `/cms/admin/report/details?reportId=${item.id}`;
        return item;
      });

      Object.keys(searchInputs).map((item) => {
        searchInputs[item].value = searchWord;
        return searchInputs[item];
      });

      return {
        ...state,
        totalCount,
        searchResult,
        searchInputs,
        pageIndex,
        pageSize,
      };
    }
    case 'SET_PAGE_SIZE': {
      const { pageIndex = 0, pageSize = 20 } = action;

      return {
        ...state,
        pageIndex,
        pageSize,
      };
    }
    case 'UPDATE_FORM_INPUT_VALUE': {
      const { changeFormInput, section } = action;

      return {
        ...state,
        formInputs: updateNewFormInputs(formInputs, changeFormInput, section),
      };
    }
    case 'UPDATE_FORM_INPUT_MULTIPLE_VALUE': {
      const { changeFormInput, section } = action;

      return {
        ...state,
        formInputs: updateMultipleFormInputs(formInputs, changeFormInput, section),
      };
    }
    case 'INIT_FORM_REPORT_CATEGORY': {
      const { PortfolioCategories, fieldName } = action;
      const PortfolioCategoriesArr = [];

      PortfolioCategories.map((item) =>
        PortfolioCategoriesArr.push({ label: `${item?.title_enHK} (${item?.name})`, value: item?.id }),
      );

      return {
        ...state,
        formInputs:
          PortfolioCategoriesArr.length > 0
            ? updateDropdownData(formInputs, 'formDetails', fieldName, PortfolioCategoriesArr)
            : formInputs,
      };
    }
    case 'INIT_FORM_REPORT_TYPE': {
      const { PortfolioTypes, fieldName } = action;
      const PortfolioTypesArr = [];

      PortfolioTypes.map((item) =>
        PortfolioTypesArr.push({ label: `${item?.title_enHK} (${item?.name})`, value: item?.id }),
      );

      return {
        ...state,
        formInputs:
          PortfolioTypesArr.length > 0
            ? updateDropdownData(formInputs, 'formDetails', fieldName, PortfolioTypesArr)
            : formInputs,
      };
    }
    case 'SET_TOUCHED': {
      return {
        ...state,
        formInputs: formInputs ? setTouched(formInputs) : formInputs,
      };
    }
    case 'SET_SORT': {
      const { sortColumnId } = action;

      return {
        ...state,
        sortOrder: sortOrder === 'asc' ? 'desc' : 'asc',
        pageSorts: sortOrder === 'asc' ? sortColumnId : `-${sortColumnId}`,
      };
    }
    case 'SET_LOADING': {
      const { isLoading } = action;

      return {
        ...state,
        isLoading: isLoading || false,
      };
    }
    case 'GET_FORM_DETAILS_BY_ID': {
      const { formKey = '', formActions, changeFormInputs } = action;

      return {
        ...state,
        formKey,
        formActions,
        formInputs: getFormDetailsById(changeFormInputs),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default PortfolioReducer;
