import { updateNewFormInputs, setTouched, updateDropdownData } from 'utility';

const AuthReducer = (state, action) => {
  let userState = {};
  const { toggleSideMenu, error, user, formInputs } = state;

  switch (action.type) {
    case 'SET_TOGGLE_DRAWER': {
      return {
        ...state,
        toggleSideMenu: !toggleSideMenu,
      };
    }
    case 'UPDATE_FORM_INPUT_VALUE': {
      const { changeFormInput, section } = action;

      return {
        ...state,
        formInputs: updateNewFormInputs(formInputs, changeFormInput, section),
      };
    }
    case 'CHECK_SESSION_SUCCESS': {
      return { ...state };
    }
    case 'HANDLE_LOGIN_ERROR': {
      const { errorInfo } = action;
      const { errorCode = '', message: errorMsg = '' } = errorInfo;

      return {
        ...state,
        isLoggingIn: false,
        error: {
          ...error,
          code: errorCode,
          msg: errorMsg,
        },
        lastAction: new Date().getTime(),
      };
    }
    case 'SUCCESS_LOGIN': {
      // console.log('SUCCESS_LOGIN', action);
      const { loginData } = action;
      const { user: actionUser, roles, csrf_token, ext: estateInfo } = loginData;
      const {
        id: loginId = '',
        email = '',
        tel = '',
        name: displayName = '',
        avatar = '',
        user_info_id: userInfoId = '',
      } = actionUser;

      userState = {
        loginId,
        email,
        tel,
        displayName,
        roles,
        avatar,
        userInfoId,
        estateInfo,
        isLoggingIn: true,
        hasRole: true,
        status: 'AUTHENTICATED',
      };

      window.sessionStorage.setItem('user', JSON.stringify(userState));
      window.sessionStorage.setItem('csrfToken', JSON.stringify(csrf_token));

      return {
        ...state,
        user: userState,
      };
    }
    case 'LOGOUT': {
      window.sessionStorage.clear();
      window.location.href = `/cms/admin/login`;
      return null;
    }
    case 'CHANGE_THEME': {
      const { theme } = action;

      userState = {
        settings: {
          ...user.settings,
          theme,
        },
      };

      window.sessionStorage.setItem('user', JSON.stringify(userState));

      return {
        ...state,
        user: userState,
      };
    }
    case 'SET_TOUCHED': {
      return {
        ...state,
        formInputs: formInputs ? setTouched(formInputs) : formInputs,
      };
    }
    case 'INIT_FORM_ESTATES': {
      const { estates } = action;
      const estatesArr = [];

      estates.map((item) => estatesArr.push({ label: `${item?.title_enHK} (${item?.name})`, value: item?.id }));

      return {
        ...state,
        formInputs:
          estatesArr.length > 0 ? updateDropdownData(formInputs, 'formDetails', 'estate', estatesArr) : formInputs,
      };
    }
    default:
      // console.log('error');
      return {
        ...state,
      };
  }
};

export default AuthReducer;
