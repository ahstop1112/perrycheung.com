import axios from 'axios';

export const LANG = 'en';

export const RESTFUL_API_URL = process.env.REACT_APP_RESTFUL_API;
export const RESTFUL_API_PROXY = process.env.REACT_APP_PORT;
// export const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_SIZES = [10, 20, 25, 50, 100];

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT_JS = 'yyyy-MM-dd';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATETIME_FORMAT_JS = 'yyyy-MM-dd HH:mm:ss';
export const DATETIME_FORMAT_SHORT = 'YYYY-MM-dd HH:mm';
export const DATETIME_FORMAT_SHORT_JS = 'yyyy-MM-dd HH:mm';
export const TIME_FORMAT_SHORT = 'HH:mm';
export const TIME_FORMAT_SHORT_JS = 'HH:mm';

export const DEFAULT_PAGE_ROOT = 'perrycheung.com';
export const DEFAULT_PAGE_PATH = '/home';
export const DEFAULT_PAGE_TITLE = "Perry Cheung's Portfolio";
export const SIDEBAR_WIDTH = 300;
export const SIDEBAR_WIDTH_XL = 360;

export const axiosInstance = axios.create({
  baseURL: RESTFUL_API_URL,
});
