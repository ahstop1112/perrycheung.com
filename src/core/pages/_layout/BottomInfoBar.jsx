import React from 'react';
import clsx from 'clsx';
import { Grid, Toolbar } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mobileFooter: {
    display: `none`,
    [theme.breakpoints.down('sm')]: {
      position: `fixed`,
      height: 50,
      top: `auto`,
      bottom: 0,
      display: 'flex',
      justifyContent: `center`,
      borderTop: theme.palette.line[2],
      width: '100%',
      backgroundColor: theme.palette.button[1],
      padding: `0 !important`,
      boxShadow: theme.palette.shadow[1],
    },
    '& nav': {
      width: `auto`,
      display: `flex`,
      justifyContent: `center`,
      color: theme.palette.text[5],
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      '& > div': {
        width: `auto`,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
        borderRight: `1px solid rgba(255,255,255,0.5)`,
        '&.styled-stroke-21': {
          color: `${theme.palette.text.disabled}`,
        },
        '&:last-child': {
          borderRight: 0,
        },
      },
      '& span': {
        width: `auto`,
        color: theme.palette.text[5],
        fontSize: `0.875rem`,
        '&.MuiChip-label': {
          fontSize: `0.7rem`,
        },
      },
      '& svg': {
        color: theme.palette.text[5],
      },
    },
  },
  appMenuToolBar: {
    flex: `0 0 100%`,
    height: 50,
    backgroundColor: theme.palette.brandColor,
    color: theme.palette.text[5],
  },
  appMenuToolBarShift: {},
  iconButtonRoot: {
    borderRadius: theme.spacing(1),
    width: '100%',
    height: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  iconButtonLabel: {
    '&:hover': {
      color: 'white',
    },
    width: '100%',
    height: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  appMenuToolBarContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const BottomInfoBar = () => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.appMenuToolBar)}>
      <Grid container className={clsx(classes.appMenuToolBarContainer)}>
        @copyright 2021
      </Grid>
    </Toolbar>
  );
};

export default BottomInfoBar;
