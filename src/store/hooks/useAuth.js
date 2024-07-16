//  Getting the Common Hooks from core/store/hooks
import useApiHandler from 'core/store/hooks/useApiHandler'; //  Getting the API Handler dispatch from useApiHandler (Red Box on the right top)
//  Different API(s)
import { LoginWithID } from 'core/services/Auth';
import useAuthContext from './useAuthContext';

const useAuth = () => {
  const { authContext: Auth, type } = useAuthContext();
  const AuthState = Auth?.state;
  const dispatch = Auth?.dispatch;
  const { dispatch: apiHandlerDispatch } = useApiHandler();

  //  Getting the "User" and "Tasks" data from Window Session Storage
  const userStorage = JSON.parse(window.sessionStorage.getItem('user'));

  //  Checking current user's permission (authorities)
  const isUser = userStorage && userStorage?.authorities?.length;
  const isUserAdmin =
    userStorage &&
    userStorage?.authorities &&
    userStorage?.authorities.some(
      (item) =>
        item.startsWith('SYS-PARM-MAINT_') ||
        item.startsWith('USR-USR-MAINT_') ||
        item.startsWith('USR-ROLE-MAINT_') ||
        item.startsWith('USR-PERM-MAINT_') ||
        item.startsWith('USR-DEPT-MAINT_') ||
        item.startsWith('SYS-APPS-MAINT_') ||
        item.startsWith('SYS-CMPNY-MAINT_'),
    );

  //  Checking current user's permission (authorities)
  const isBpmpUser =
    userStorage &&
    userStorage?.authorities &&
    userStorage?.authorities.some((item) => item.startsWith('BPMP-PROC-USER_'));
  const isBpmpAdmin =
    userStorage &&
    userStorage?.authorities &&
    userStorage?.authorities.some((item) => item.startsWith('BPMP-PROC-ADMIN_'));

  //  Starting the authenticaion on Login Form
  //  If login sucess, it will pass the user data to window session storage and update the user state with dispatch function "SUCCESS_LOGIN"
  const loginForm = async (loginId, password) => {
    try {
      const res = await LoginWithID(loginId, password);
      if (res.status === 200 || res.status === 204) {
        dispatch({ type: 'SUCCESS_LOGIN', loginData: res?.data });
      }
    } catch (error) {
      apiHandlerDispatch({ type: 'HANDLE_ERROR', error });
    } finally {
      dispatch({ type: 'SET_API_LOADING', isAPILoading: false });
    }
  };

  //  Checking the login user's permissions from API login data,
  //  filtering the authoritied pages for user
  const checkAuthorities = (permission) => {
    const authorities = userStorage?.authorities.filter((item) => item.includes(permission));
    return authorities.length > 0;
  };

  const alert4logout = () => dispatch({ type: 'LOGOUT' });

  return {
    Auth,
    AuthState,
    type,
    dispatch,
    isUserAdmin,
    isUser,
    isBpmpAdmin,
    isBpmpUser,
    userStorage,
    loginForm,
    checkAuthorities,
    alert4logout,
  };
};

export default useAuth;
