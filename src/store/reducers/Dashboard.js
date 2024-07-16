const DashboardReducer = (state, action) => {
  const ErrorMessage = {
    status: false,
    errorText: 'Please try again later',
  };

  switch (action.type) {
    case 'SHOW_ERROR_MESSAGE': {
      ErrorMessage.status = action.payload;
      return {
        ...state,
        ErrorMessage,
      };
    }
    case 'SET_LOADING': {
      const { isLoading } = action;

      return {
        ...state,
        isLoading: isLoading || false,
      };
    }
    default: {
      // console.log('error');

      return {
        ...state,
      };
    }
  }
};

export default DashboardReducer;
