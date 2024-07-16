import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import PortfolioReducer from 'core/store/reducers/Portfolio';

export const PortfolioContext = createContext([{}, (obj) => obj]);

const PortfolioProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(PortfolioReducer, initState);

  return <PortfolioContext.Provider value={{ state, dispatch }}>{children}</PortfolioContext.Provider>;
};

export default PortfolioProvider;

PortfolioProvider.propTypes = {
  initState: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
