import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import { DATE_FORMAT } from 'utility/constants';

export const allowAccess = (authorities, needed = []) => {
  const matched = _.intersection(authorities, needed);
  return matched.length > 0;
};

export const removeEmptyValue = (obj) => {
  const newObj = {};
  return Object.keys(obj)
    .filter((prop) => obj[prop] !== '')
    .map((prop) => {
      newObj[prop] = obj[prop];
      return newObj;
    });
};

export const encodeText = (text) => {
  let result = '';
  const len = text.length;
  for (let i = 0; i < len; i += 1) {
    let p = '';
    p = text.substring(i, i + 1);
    result += String.fromCharCode(p.charCodeAt() + i + 1);
  }
  return window.btoa(unescape(encodeURIComponent(result)));
};

/** *** File / Encode Related ****** */

export const uploadFiles = async (files, url, handleResult, fileDownload = false) => {
  const formData = new FormData();
  files.map((file) => formData.append('files', file));

  const options = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  if (fileDownload) {
    options.responseType = 'blob';
  }

  // const result = await serviceApi.post(url, formData, options);
  // handleResult(result);
};

export const base64ToBlob = (base64String, type = 'application/octet-stream') => {
  const byteString = atob(base64String);
  const buffer = new ArrayBuffer(byteString.length);
  const dataArray = new Uint8Array(buffer);
  byteString.map((item, index) => {
    dataArray[index] = byteString.charCodeAt(index);
    return dataArray[index];
  });
  return new Blob([dataArray], { type });
};

export const downloadFile = (base64String, fileName) => {
  const blob = base64ToBlob(base64String);
  const url = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.href = url;
  tempLink.setAttribute('download', fileName);
  tempLink.click();
};

export const exportBase64PDF = (pdfData) => {
  const byteCharacters = atob(pdfData);
  const byteNumbers = [];
  byteCharacters.map((item, index) => {
    byteNumbers[index] = byteCharacters.charCodeAt(index);
    return byteNumbers[index];
  });
  const byteArray = new Uint8Array(byteNumbers);
  const file = new Blob([byteArray], { type: 'application/pdf;base64' });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
};

export const SheetJSFT = ['xlsx', 'xlsb', 'xlsm', 'xls', 'csv'].map((x) => `.${x}`).join(',');

// formatted the final JSON format to upload
export const formattedCSVJSON = (tmpJSON) => tmpJSON.map(({ error, tmpDBField, ...item }) => item);

export const constructQueryString = (data) => queryString.stringify(data);

export const constructQueryObj = (query) => {
  let params = queryString.parse(query);
  if (!_.isUndefined(params?.pageSorts)) {
    const sorts = _.split(params?.pageSorts, ',').map((x) => {
      if (_.startsWith(x, '-')) {
        return { column: _.trimStart(x, '+-'), direction: 'desc' };
      } else {
        return { column: _.trimStart(x, '+-'), direction: 'asc' };
      }
    });
    params = _.omit(params, 'pageSorts');
    params = { ...params, pageSorts: sorts };
  }
  return _.isEmpty(params) ? undefined : params;
};

/** *** Number / Font Checking Related ****** */

export const isUndefinedOrZero = (value) => _.isUndefined(value) || _.isNull(value) || value === 0;

export const hasNumber = (string) => /\d/.test(string);

export const hasLowerCase = (string) => /[a-z]/.test(string);

export const hasUpperCase = (string) => /[A-Z]/.test(string);

export const hasEightChars = (string) => string.length >= 8;

export const hasNoSpecialChar = (string) => /^[a-z0-9]+$/i.test(string);

export const toPercentage = (decimal) => decimal * 100;

export const toDecimal = (percentage) => 1 / percentage;

export const toCurrency = (decimal) =>
  Number.parseFloat(decimal)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const toUTC8FormatDDMMMYYYY = (date) => moment(date).utcOffset(8).format('DD MMM YYYY');

/** *** Date Related ****** */

export const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

export const formatDate = (date) =>
  typeof date === 'string' && `${date.substring(6, 8)}/${date.substring(4, 6)}/${date.substring(0, 4)}`;

export const isWeekday = (date) => moment(date).weekday() !== 0 && moment(date).weekday() !== 6;

export const getMonthEnglish = (date) => {
  const monthKeyArr = [
    { month: '01', monthEnglish: 'Jan' },
    { month: '02', monthEnglish: 'Feb' },
    { month: '03', monthEnglish: 'Mar' },
    { month: '04', monthEnglish: 'Apr' },
    { month: '05', monthEnglish: 'May' },
    { month: '06', monthEnglish: 'Jun' },
    { month: '07', monthEnglish: 'Jul' },
    { month: '08', monthEnglish: 'Aug' },
    { month: '09', monthEnglish: 'Sep' },
    { month: '10', monthEnglish: 'Oct' },
    { month: '11', monthEnglish: 'Nov' },
    { month: '12', monthEnglish: 'Dec' },
  ];
  return monthKeyArr
    .filter((monthKeyArrList) => monthKeyArrList?.month === date.slice(4, 6))
    .map((monthKeyArrList) => monthKeyArrList?.monthEnglish);
};

/** *** Verification Related ****** */

export const getDate = (last, number) => last === 1 && moment().subtract(last + number, 'days');

export const changeStringToDate = (dateString) => {
  let dateTime = '';
  switch (dateString) {
    case 'today':
      dateTime = moment().format(DATE_FORMAT);
      break;
    case 'last7days':
      dateTime = moment().subtract(7, 'd').format(DATE_FORMAT);
      break;
    case 'thisMonth':
      dateTime = moment().subtract(7, 'd').format(DATE_FORMAT);
      break;
    default:
  }

  return dateTime;
};

export const convertDateToAPI = (dateString, startDate, endDate) => {
  let dateUrl = ``;

  switch (dateString) {
    case 'today':
      dateUrl = `&${startDate}=${changeStringToDate(dateString)}`;
      break;
    case 'last7days':
      dateUrl = `&${startDate}=${changeStringToDate(dateString)}`;
      break;
    case 'thisMonth':
      dateUrl = `&${startDate}=${moment().startOf('month').format(DATE_FORMAT)}&${endDate}=${moment()
        .endOf('month')
        .format(DATE_FORMAT)}`;
      break;
    case 'earlier':
      dateUrl = `&${endDate}=${moment().subtract(1, 'months').endOf('month').format(DATE_FORMAT)}`;
      break;
    default:
      dateUrl = ``;
  }
  return dateUrl;
};

export const changeDateToDateString = (dateTime) => moment(new Date()).from(moment(dateTime));

export const dateToString = (date) => date && date.toISOString().substr(0, 10).replaceAll('-', '');

export const verifyPassword = (password) => {
  const res = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!"#$%&'\()\*+,-\.\/:;<=>?@\[\\\]^_`{|}~]{8,}$/; // eslint-disable-line no-useless-escape
  return res.test(String(password));
};

// TODO: if the regexp correct ?
export const verifyPhoneNumber = (phone) => {
  // console.log(phone);
  const res = /^[1][3,4,5,7,8][0-9]{9}$/;
  // console.log(res.test(phone))
  return res.test(String(phone));
};

export const replacePhoneNumber = (phone) => {
  phone && phone.replaceAll('-', '');
};

export const checkIsValid = (value) => value !== '' && value !== undefined && value !== null;

/** *** Dynamic Form Related ****** */

export const checkPattern = (value, updatedFormInput, regex, isRequired, inputType) => {
  let isValid = isRequired !== true;

  switch (regex) {
    case 'email':
      isValid = true;
      break;
    case 'haveOne':
      isValid = value.length >= 1 && value.length <= 20;
      break;
    case 'maxLength10':
      isValid = value.length >= 1 && value.length <= 10;
      break;
    case 'phone':
      isValid = verifyPhoneNumber(value);
      break;
    case 'isNotEmpty':
      switch (inputType) {
        case 'text':
          isValid = value.length >= 2 && value.length <= 50;
          break;
        case 'number':
          isValid = value.toString().length >= 1 && value.toString().length <= 20 && Number.isInteger(value);
          break;
        case 'dropdown':
          isValid = value !== null;
          break;
        case 'radiobutton':
          isValid = !!value;
          break;
        case 'checkbox': {
          const checked = updatedFormInput.data.filter((item) => item.checked === true); // retun array of objects
          isValid = checked.length > 0;
          break;
        }
        default:
        // ignore
      }
      break;
    case 'oneCheckbox':
      switch (inputType) {
        case 'checkbox':
          isValid = true;
          break;
        default:
        // ignore
      }
      break;
    case 'password':
      isValid = verifyPassword(value);
      break;
    case 'either':
      isValid = true;
      break;
    case 'notLessThanEffectiveDate':
      // console.log(updatedFormInput);
      break;
    default:
      isValid = true;
  }

  return isValid;
};

export const updateNewFormInputs = (formInputs, updateFormInput, sectionName) => {
  const { name, type, isRequired, value, regex } = updateFormInput;

  // Checking Pattern, is it valid or not
  let newFormInputs = {};
  if (name === 'loginId' && value === 'admin@admin.com') {
    newFormInputs = {
      ...formInputs,
      [sectionName]: {
        ...formInputs[sectionName],
        fields: {
          ...formInputs[sectionName].fields,
          [name]: {
            ...updateFormInput,
            isValid: checkPattern(value, updateFormInput, regex, isRequired, type),
            isTouched: true,
          },
          estate: {
            ...formInputs[sectionName].fields.estate,
            value: { label: 'admin', value: 0 },
            isRequired: false,
          },
        },
      },
    };
  } else {
    newFormInputs = {
      ...formInputs,
      [sectionName]: {
        ...formInputs[sectionName],
        fields: {
          ...formInputs[sectionName].fields,
          [name]: {
            ...updateFormInput,
            isValid: checkPattern(value, updateFormInput, regex, isRequired, type),
            isTouched: true,
          },
        },
      },
    };
  }

  return newFormInputs;
};

export const checkPassword = (formInputs, repeatPassword, newPasswordName, sectionName) => {
  const newFormInputs = {
    ...formInputs,
    [sectionName]: {
      ...formInputs[sectionName],
      fields: {
        ...formInputs[sectionName].fields,
        repeatPassword: {
          ...formInputs[sectionName].fields?.repeatPassword,
          isValid: repeatPassword === formInputs[sectionName].fields?.newPasswordName?.value,
          isTouched: true,
        },
      },
    },
  };

  return newFormInputs;
};

export const updateSearchInputs = (formInputs, sectionName, updateFormInput) => {
  const fieldName = updateFormInput?.name;

  const newSearchInputs = {
    ...formInputs,
    [sectionName]: {
      ...formInputs[sectionName],
      fields: {
        ...formInputs[sectionName].fields,
        [fieldName]: {
          ...updateFormInput,
          value: updateFormInput?.value,
          isValid: true,
          isTouched: true,
        },
      },
    },
  };

  return newSearchInputs;
};

export const updateSearchLongInput = (formInputs, sectionName) => {
  const newObj = {
    ...formInputs,
    [sectionName]: {
      ...formInputs[sectionName],
      longFields: {
        ...formInputs[sectionName].longFields,
        keyword: {
          ...formInputs[sectionName].longFields.keyword,
          isValid: true,
          isTouched: true,
        },
      },
    },
  };
  return newObj;
};

export const resetSearchInputs = (formInputs, sectionName) => {
  const { fields: searchInputs, longFields: searchLongInputs } = formInputs?.search;

  Object.keys(searchInputs)
    .filter((field) => typeof searchInputs[field] === 'object')
    .map((item) => {
      switch (searchInputs[item].type) {
        case 'dropdown': {
          searchInputs[item].value = { label: '', value: '' };
          break;
        }
        case 'dateRange': {
          searchInputs[item].startDate = '';
          searchInputs[item].endDate = '';
          break;
        }
        default:
          searchInputs[item].value = '';
          searchInputs[item].tmpValue = '';
      }
      return searchInputs[item];
    });

  Object.keys(searchLongInputs)
    .filter((field) => field !== 'processDefinitionKey')
    .map((item) => {
      searchLongInputs[item].value = '';
      searchLongInputs[item].tmpValue = '';
      return searchLongInputs[item];
    });

  return {
    ...formInputs,
    [sectionName]: {
      ...formInputs[sectionName],
      longFields: searchLongInputs,
      fields: searchInputs,
    },
  };
};

export const getFormDetailsById = (formInputs) => {
  formInputs &&
    Object.keys(formInputs)
      .filter((formSection) => typeof formInputs[formSection] === 'object' && formSection !== 'layout')
      .map((formSection) => {
        const { fields } = formInputs[formSection];

        Object.keys(fields)
          .filter((item) => fields[item].isEnabled !== false && fields[item].isShown !== false)
          .map((item) => {
            switch (item) {
              case 'createdDatetime': {
                fields[item].value = moment().toDate();
                fields[item].isValid = true;
                break;
              }
              case 'effectiveDate': {
                fields[item].value = moment().toDate();
                fields[item].isValid = true;
                break;
              }
              default:
            }

            return fields[item];
          });
        return fields;
      });

  // console.log(formInputs);
  return formInputs;
};

export const getBuildingList = (formInputs, departments, fieldName) => {
  const departmentData = [];
  let newFormInputs = formInputs;

  departments.length > 0 &&
    departments.map((item) =>
      departmentData.push({
        value: item.id ? item.id : '',
        label: item.name ? item.name : '',
      }),
    );

  if (formInputs.formDetails.fields[fieldName]) {
    newFormInputs = {
      ...formInputs,
      formDetails: {
        ...formInputs.formDetails,
        fields: {
          ...formInputs.formDetails.fields,
          [fieldName]: {
            ...formInputs.formDetails.fields[fieldName],
            isValid: true,
            data: departmentData,
          },
        },
      },
    };
  }
  return newFormInputs;
};

export const updateDropdownData = (formInputs, sectionName, fieldName, data) => {
  formInputs &&
    fieldName &&
    Object.keys(formInputs).length > 0 &&
    Object.keys(formInputs)
      .filter((formSection) => typeof formInputs[formSection] === 'object' && formSection !== 'layout')
      .map((formSection) => {
        const { fields } = formInputs[formSection];
        Object.keys(fields)
          .filter((item) => typeof fields[item] === 'object' && fields[item].type !== 'multiple' && item === fieldName)
          .map((item) => {
            fields[item].data = data;
            return fields[item];
          });

        Object.keys(fields)
          .filter((item) => typeof fields[item] === 'object' && fields[item].type === 'multiple')
          .map((item) => {
            const { multiple } = fields[item];
            Object.keys(multiple)
              .filter((subItem) => typeof multiple[subItem] === 'object')
              .map((subItem) =>
                Object.keys(multiple[subItem])
                  .filter(
                    (subInput) =>
                      typeof multiple[subItem][subInput] === 'object' &&
                      multiple[subItem][subInput].name.includes(fieldName),
                  )
                  .map((subInput) => {
                    multiple[subItem][subInput].data = data;
                    if (subInput.includes('estate')) {
                      const userStorage = JSON.parse(window.sessionStorage.getItem('user'));
                      multiple[subItem][subInput].value = data.filter(
                        (dataValue) => dataValue.value === userStorage?.estateInfo[0].estate_id,
                      )[0];
                    }
                    return subInput;
                  }),
              );
            return fields[item];
          });

        return formSection;
      });

  return formInputs;
};

export const setTouched = (newFormInputs) => {
  Object.keys(newFormInputs)
    .filter(
      (formSection) =>
        typeof newFormInputs[formSection] === 'object' &&
        formSection !== 'layout' &&
        formSection !== 'history' &&
        formSection !== 'templateLinks',
    )
    .map((formSection) => {
      const { fields: newfields } = newFormInputs[formSection];

      Object.keys(newfields)
        .filter((item) => newfields[item].isEnabled !== false && newfields[item].isShown !== false)
        .map((item) => {
          const field = newfields[item];
          if (field.type === 'multiple') {
            // console.log(newfields[item]);
            Object.keys(field.multiple)
              .filter((subItem) => typeof field.multiple[subItem] === 'object')
              .map((subItem) => {
                Object.keys(field.multiple[subItem])
                  .filter((multipleItem) => typeof field.multiple[subItem][multipleItem] === 'object')
                  .map((multipleItem) => {
                    const multipleField = field.multiple[subItem][multipleItem];
                    if (multipleItem.type === 'multipleChild') {
                      // Object.keys(multipleField.multipleChild).filter(
                      //   (subItem) => typeof field.multiple[subItem] === 'object',
                      // );
                    } else {
                      multipleField.isTouched = true;
                    }
                    return multipleItem;
                  });
                return subItem;
              });
          } else {
            newfields[item].isTouched = true;
          }
          return newfields[item];
        });
      return newfields;
    });
  return newFormInputs;
};

export const multipleAdd = (multipleField) => {
  let multiple = multipleField?.multiple;

  const multipleName = multipleField?.name;
  const multiLength = Object.keys(multipleField?.multiple).length;
  const maxLength = multipleField?.maxLength;
  const originalItem = multiple[`${multipleName}_0`];
  let newItem = JSON.parse(JSON.stringify(originalItem));

  if (maxLength > multiLength) {
    Object.keys(newItem)
      .filter((subItem) => typeof newItem[subItem] === 'object')
      .map((subItem) => {
        const splitId = subItem.split('_');
        const newId = `${splitId[0]}_${multiLength}`;
        newItem[subItem].name = newId;
        switch (newItem[subItem].type) {
          case 'switcher': {
            newItem[subItem].checked = false;
            newItem[subItem].value = splitId[0] === 'isOffice';
            break;
          }
          case 'text': {
            newItem[subItem].value = '';
            break;
          }
          case 'dropdown': {
            newItem[subItem].value = { label: '', value: '' };
            break;
          }
          default:
        }

        newItem = { ...newItem, [newId]: newItem[subItem] };
        delete newItem[subItem];

        return newItem;
      });
    newItem.order = multiLength;
    multiple = { ...multiple, ...{ [`${multipleName}_${multiLength}`]: newItem } };
  }

  return multiple;
};

export const multipleAddAPI = (multipleField, newItemIndex, splitSymbol) => {
  const multiple = multipleField?.multiple;
  const multipleName = multipleField?.name;
  const originalItem = multiple[`${multipleName}_0`];
  // console.log(multipleName);
  let newItem = JSON.parse(JSON.stringify(originalItem));

  if (newItemIndex > 0) {
    Object.keys(newItem)
      .filter((subItem) => typeof newItem[subItem] === 'object')
      .map((subItem) => {
        const splitId = subItem.split(`${splitSymbol}`);
        const newId = `${splitId[0]}${splitSymbol}${newItemIndex}`;
        newItem[subItem].name = newId;
        switch (newItem[subItem].type) {
          case 'switcher': {
            newItem[subItem].checked = false;
            newItem[subItem].value = splitId[0] === 'isOffice';
            break;
          }
          case 'text': {
            newItem[subItem].value = '';
            break;
          }
          default:
        }

        newItem = { ...newItem, [newId]: newItem[subItem] };
        delete newItem[subItem];

        return newItem;
      });
    newItem.order = newItemIndex;
    return { [`${multipleName}${splitSymbol}${newItemIndex}`]: newItem };
  } else {
    return originalItem;
  }
};

export const multipleRemove = (multipleField, removeKey) => {
  delete multipleField?.multiple[removeKey];
  return multipleField?.multiple;
};

export const updateMultipleFormInputs = (formInputs, updateFormInput, sectionName) => {
  const { name = '', parentField = '', value } = updateFormInput;
  const itemIndex = parseInt(name.split('_')[1], 10);

  const { multiple } = formInputs[sectionName].fields[parentField];
  console.log(multiple[`${parentField}_${itemIndex}`]);
  multiple[`${parentField}_${itemIndex}`][name].value = value;
  return formInputs;
};

export const permissionDialogResult = (
  searchAddResult,
  availablePermissions,
  currentResult,
  checkField,
  functionId,
) => {
  const filteredResult = searchAddResult.filter((item) => !currentResult.includes(`${item[checkField]}`));

  filteredResult.map((item, index) => {
    item.availablePermissions = JSON.parse(JSON.stringify(availablePermissions));
    item.availablePermissions.map((subItem, subIndex) => {
      // const newName = ['searchAddResult', ]
      const newObj = {
        ...subItem,
        parentCode: `${filteredResult[index][checkField]}`,
        id: subItem?.permissionId,
        name: `searchAddResult||${checkField}||${filteredResult[index][checkField]}||${subItem?.permissionId}||${functionId}`,
      };
      item.availablePermissions[subIndex] = newObj;
      return item?.availablePermissions[subItem];
    });
    item.permissionCode = `${filteredResult[index][checkField]}`;
    item.selectedPermissions = [];
    item.permissions = [];
    return item;
  });

  // console.log(filteredResult);

  return filteredResult;
};
