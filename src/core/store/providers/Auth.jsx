import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import AuthReducer from 'core/store/reducers/Auth';

export const AuthContext = createContext([{}, (obj) => obj]);

const AuthProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
