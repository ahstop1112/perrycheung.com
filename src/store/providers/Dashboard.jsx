import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import DashboardReducer from 'core/store/reducers/Dashboard';

export const DashboardContext = createContext([{}, (obj) => obj]);

const DashboardProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initState);

  return <DashboardContext.Provider value={{ state, dispatch }}>{children}</DashboardContext.Provider>;
};

export default DashboardProvider;

DashboardProvider.propTypes = {
  initState: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
