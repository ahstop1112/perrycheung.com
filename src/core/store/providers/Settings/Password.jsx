import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import PasswordReducer from 'core/store/reducers/Settings/Password';

export const PasswordContext = createContext([{}, (obj) => obj]);

const PasswordProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(PasswordReducer, initState);

  return <PasswordContext.Provider value={{ state, dispatch }}>{children}</PasswordContext.Provider>;
};

export default PasswordProvider;

PasswordProvider.propTypes = {
  initState: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
