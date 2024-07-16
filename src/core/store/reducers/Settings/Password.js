import { updateNewFormInputs, getFormDetailsById, checkPassword, setTouched } from 'utility/index';

const PasswordReducer = (state, action) => {
  const { formInputs } = state;
  switch (action.type) {
    case 'GET_FORM_DETAILS_BY_ID': {
      const { formKey = '', formActions, changeFormInputs } = action;

      return {
        ...state,
        formKey,
        formActions,
        formInputs: getFormDetailsById(changeFormInputs),
      };
    }
    case 'UPDATE_FORM_INPUT_VALUE': {
      const { changeFormInput, section } = action;

      return {
        ...state,
        formInputs: updateNewFormInputs(formInputs, changeFormInput, section),
      };
    }
    case 'CHECK_REPEAT_PASSWORD': {
      const { repeatPasswordValue, newPasswordName } = action;
      return {
        ...state,
        formInputs: checkPassword(formInputs, repeatPasswordValue, newPasswordName, 'formDetails'),
      };
    }
    case 'SET_TOUCHED': {
      return {
        ...state,
        formInputs: formInputs ? setTouched(formInputs) : formInputs,
      };
    }
    case 'SET_LOADING': {
      const { isLoading } = action;

      return {
        ...state,
        isLoading: isLoading || false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default PasswordReducer;
