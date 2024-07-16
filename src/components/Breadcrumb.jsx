//  General JS Library importation
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles"; //  Define styles with @mui library
import { Breadcrumbs as MuiBreadcrumb, Link, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    width: `100%`,
    fontSize: '1rem',
    color: theme.palette.text[5],
    marginBottom: 0,
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(0),
    },
    '& a': {
      color: theme.palette.text[5],
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        cursor: `pointer`,
      },
      '&.lv1Link': {
        color: theme.palette.text[5],
      },
      '&.lv2Link': {
        color: theme.palette.text[5],
      },
    },
    '& .currentLink': {
      color: theme.palette.text[1],
    },
    '& .MuiBreadcrumbs-separator': {
      color: theme.palette.text[4],
      opacity: 0.9,
    },
  },
}));

const Breadcrumb = ({ currentLinkTag, ...props }) => {
  const { t } = useTranslation(); //  Using the react i18n for translateion
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <MuiBreadcrumb aria-label='breadcrumb' className={classes.breadcrumb}>
      <Link color='inherit' to='/' onClick={() => navigate('/')}>
        {t('commons.home')}
      </Link>
      {props.lv1Tag && (
        <Link color='inherit' to={props.lv1Link} onClick={() => navigate(props.lv1Link)} className='lv1Link'>
          {props.lv1Tag}
        </Link>
      )}
      {props.lv2Tag && (
        <Link color='inherit' to={props.lv2Link} onClick={() => navigate(props.lv2Link)} className='lv2Link'>
          {props.lv2Tag}
        </Link>
      )}
      {currentLinkTag && (
        <Typography className='currentLink' color='textPrimary' aria-current='page'>
          {currentLinkTag}
        </Typography>
      )}
    </MuiBreadcrumb>
  );
};

Breadcrumb.propTypes = {
  currentLinkTag: PropTypes.string.isRequired,
};

export default Breadcrumb;
