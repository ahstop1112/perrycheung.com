import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import ApiHandlerReducer from 'core/store/reducers/ApiHandler';

export const ApiHandlerContext = createContext([{}, (obj) => obj]);

const ApiHandlerProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(ApiHandlerReducer, initState);

  return <ApiHandlerContext.Provider value={{ state, dispatch }}>{children}</ApiHandlerContext.Provider>;
};

export default ApiHandlerProvider;

ApiHandlerProvider.propTypes = {
  initState: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
