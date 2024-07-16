const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOGGLE_DRAWER': {
      return {
        ...state,
        toggleDrawer: !state.toggleDrawer,
      };
    }
    default:
      // console.log('error');
      return {
        ...state,
      };
  }
};

export default AppReducer;
