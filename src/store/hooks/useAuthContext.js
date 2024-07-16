//  General JS Library importation
import { useContext } from 'react';
//  Getting the Provider for state usage
import { AuthContext } from 'core/store/providers/Auth';
import { OAuthContext } from 'core/store/providers/OAuth';

const useAuthContext = () => {
  const authContext = useContext(
    (
      process.env.REACT_APP_OAUTH2_ENABLED
        ? process.env.REACT_APP_OAUTH2_ENABLED === 'Y'
        : window.OAUTH2_ENABLED === 'Y'
    )
      ? OAuthContext
      : AuthContext,
  );
  const type = (
    process.env.REACT_APP_OAUTH2_ENABLED ? process.env.REACT_APP_OAUTH2_ENABLED === 'Y' : window.OAUTH2_ENABLED === 'Y'
  )
    ? 'OAUTH'
    : 'FORM';
  return { authContext, type };
};

export default useAuthContext;
