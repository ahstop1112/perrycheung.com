import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import AuthLayoutStyles from 'core/pages/_layout/styles/AuthLayout';

const AuthLayout = ({ children }) => {
  const classes = AuthLayoutStyles();

  return (
    <Grid container item lg={12} md={12} className={classes.mainContainer}>
      {children}
    </Grid>
  );
};

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
