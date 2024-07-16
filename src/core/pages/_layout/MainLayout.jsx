import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid } from '@mui/material';
import useApp from 'core/store/hooks/useApp';
import MainLayoutStyles from 'core/pages/_layout/styles/MainLayout';
import Header from './Header'; 
import Footer from './Footer';

const MainLayout = ({children}) => {
  const classes = MainLayoutStyles();
  const { AppState, dispatch } = useApp();

  return (
    <Grid container className={classes.mainContainer}>
      <Header />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: AppState?.toggleDrawer,
        })}>
        <Grid container className={`${classes.main} ${classes.centerContent}`}>
          {children}
        </Grid>
      </main>
      <Footer />
    </Grid>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
