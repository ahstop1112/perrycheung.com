import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import AppReducer from 'core/store/reducers/App';

export const AppContext = createContext([{}, (obj) => obj]);

const AppProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
