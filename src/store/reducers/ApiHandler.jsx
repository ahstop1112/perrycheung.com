import { DEFAULT_PAGE_ROOT } from 'utility/constants';

const ApiHandlerReducer = (state, action) => {
  const { toastList } = state;

  switch (action.type) {
    case 'HANDLE_ERROR': {
      let newMessage = {};
      const { error } = action;

      if (error) {
        newMessage = { id: 1, title: 'Error', description: `${error.error}}` };
        toastList.push(newMessage);

        if (error?.response?.status === 401) window.location.href = `/cms/admin/login`;
      }

      return {
        ...state,
        toastList,
        errorPath: window.location.href,
        errorMsg: `${error.error}`,
      };
    }
    case 'CLEAR_TOAST_LIST': {
      // console.log(toastList);
      return {
        ...state,
        toastList: [],
      };
    }
    default:
      // console.log('.error');
      return {
        ...state,
      };
  }
};

export default ApiHandlerReducer;
