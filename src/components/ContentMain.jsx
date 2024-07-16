//  General JS Library importation
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles"; 

const useStyles = makeStyles((theme) => ({
  arrowLeftIcon: {
    paddingRight: theme.spacing(0.5),
  },
  body: {
    flex: '0 0 auto',
    width: `100%`,
  },
  flex1: {
    [theme.breakpoints.down('md')]: {
      flex: 1,
    },
  },
  secondary: {
    marginRight: theme.spacing(3),
    color: theme.palette.primary.accent,
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    // border: '1px solid red',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const ContentMain = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} item xs={12} md={12} lg={12} xl={12}>
      <Grid className={clsx(classes.body)} {...props}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ContentMain;

ContentMain.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
