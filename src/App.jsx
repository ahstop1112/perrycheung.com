import React from 'react';
import AppProvider from 'core/store/providers/App';
import AuthProvider from 'core/store/providers/Auth';
import 'mapbox-gl/dist/mapbox-gl.css';
import Main from './Main';
import 'styles/App.scss';

export const defaultSessionTimeout = 3600000;

const App = () => {
  const initialAppState = {
    fullWidth: true,
    isReadWrite: true,
    toggleDrawer: window.innerWidth > 1024,
    error: [],
    search: {
      totalCount: 0,
      tmpKeyword: '',
      hashtag: '*',
      errors: {
        hashtag: {
          isTrue: false,
          value: '',
        },
      },
    },
  };

  const initialAuthState = {
    user: {
      userId: '',
      role: '',
      status: 'UNAUTHENTICATED',
      userStatus: '',
      lastAction: '',
      displayName: '',
      timeout: defaultSessionTimeout,
      settings: {
        theme: `light`,
      },
      error: {
        code: '',
        msg: '',
      },
      isLoggingIn: false,
      isLoading: false,
      authorities: [],
      availableMfaTypes: [],
      origPath: '',
    },
  };

  return (
    <AppProvider initState={initialAppState}>
      <AuthProvider initState={initialAuthState}>
        <Main />
      </AuthProvider>
    </AppProvider>
  );
};

export default App;
