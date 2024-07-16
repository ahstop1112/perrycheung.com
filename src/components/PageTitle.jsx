//  General JS Library importation
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@mui/styles"; //  Define styles with @mui library

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    fontSize: '1.75rem',
    fontWeight: 500,
    color: theme.palette.text[5],
    marginBottom: theme.spacing(1.25),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
      marginLeft: 0,
    },
    '& span': {
      cursor: `pointer`,
    },
  },
}));

const PageTitle = ({ title }) => {
  const classes = useStyles();

  return <h1 className={classes.pageTitle}>{title}</h1>;
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
