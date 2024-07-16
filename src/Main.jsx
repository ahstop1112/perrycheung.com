import React, { useEffect } from 'react';
import moment from 'moment';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { ThemeProvider } from '@mui/system';
import ApiHandlerProvider from 'core/store/providers/ApiHandler';
import ScrollToTop from 'components/ScrollToTop';
import Router from './router';
import LightTheme from './styles/LightTheme';

const Main = () => {
  const { t, i18n } = useTranslation();
  const currentTheme = LightTheme;

  const initApiState = {
    isLoading: false,
    isError: false,
    toastList: [],
    errorPath: '',
  };

  useEffect(() => {
    document.title = t('siteNameFull');
  }, [t]);

  return (
    <ThemeProvider theme={currentTheme}>
      <LocalizationProvider dateLibInstance={moment} dateAdapter={AdapterMoment} locale={i18n.language}>
        <ApiHandlerProvider initState={initApiState}>
          <BrowserRouter basename='/'>
            <CssBaseline />
            <ScrollToTop />
            <Router />
          </BrowserRouter>
        </ApiHandlerProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Main;
