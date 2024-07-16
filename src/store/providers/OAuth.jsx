import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useKeycloak } from '@react-keycloak/web';
import AuthReducer from 'core/store/reducers/Auth';
//  Different API(s)
import { GetAuthInfoWithToken, Logout } from 'core/services/Auth';
import useApiHandler from 'core/store/hooks/useApiHandler'; //  Getting the API Handler dispatch from useApiHandler (Red Box on the right top)

export const OAuthContext = createContext([{}, (obj) => obj]);

const OAuthProvider = ({ initState, children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);
  const { keycloak, initialized } = useKeycloak();
  const { dispatch: apiHandlerDispatch } = useApiHandler();

  useEffect(() => {
    const fetchAuthInfo = async () => {
      if (initialized && keycloak?.authenticated) {
        const userStorage = JSON.parse(window.sessionStorage.getItem('user'));
        if (!userStorage?.loginId || userStorage?.loginId !== keycloak?.idTokenParsed?.preferred_username) {
          try {
            const res = await GetAuthInfoWithToken(keycloak?.token);
            if (res.status === 200 || res.status === 204) {
              dispatch({ type: 'SUCCESS_LOGIN', loginData: res?.data });
            } else {
              window.sessionStorage.clear();
              apiHandlerDispatch({
                type: 'HANDLE_ERROR',
                error: {
                  reponse: { status: 401 },
                  data: {
                    errorCode: 'BSS_SYS_E00001',
                    traceId: res?.data?.traceId || {},
                    message: 'Unknown Authentication Error',
                  },
                },
              });
            }
          } catch (error) {
            window.sessionStorage.clear();
            apiHandlerDispatch({ type: 'HANDLE_ERROR', error });
            // TODO dispatch and go to authentiation error page
          } finally {
            dispatch({ type: 'SET_API_LOADING', isAPILoading: false });
          }
        }
      }
    };
    fetchAuthInfo();
  }, [initialized, keycloak?.authenticated]);

  useEffect(() => {
    if (state === null && keycloak.authenticated) {
      Logout();
      window.sessionStorage.clear();
      keycloak.logout();
    }
  }, [state, keycloak]);

  return (
    <OAuthContext.Provider value={{ state, dispatch }}>{keycloak?.authenticated && children}</OAuthContext.Provider>
  );
};

export default OAuthProvider;

OAuthProvider.propTypes = {
  initState: PropTypes.shape({
    formInputs: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
