import React from 'react';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    '& ul': {
      margin: 0,
      listStyleType: `none`,
    },
    '& li': {
      margin: `0px 25px 0px 0px`,
      display: `inline-block`,
      '&:last-child': {
        marginRight: 0,
      },
      '& a': {
        position: `relative`,
        textDecoration: `none`,
        color: theme.palette.text[2],
        fontWeight: 500,
        fontFamily: 'Poppins',
        transition: `all 0.3s ease`,
        webkitTransition: `all 0.3s ease`,
        mozTransition: `all 0.3s ease`,
        msTransition: `all 0.3s ease`,
        oTransition: `all 0.3s ease`,
        '&::before': {
          content: '',
          position: `absolute`,
          left: 0,
          bottom: -5,
          width: 0,
          // background: currentcolor,
          height: 2,
          transition: `0.3s`,
        },
      },
      '&.current a:before': {
        width: `100%`,
      },
    },
  },
}));

const TopMenu = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const menuItems = ['home', 'about', 'skills', 'portfolio', 'contact'];

  return (
    <div className='menu'>
      <Scrollspy className='anchor_nav' items={menuItems} currentClassName='current' offset={-200}>
        {menuItems.length > 0 &&
          menuItems.map((item) => (
            <li key={item}>
              <a href={`/#${item}`}>{t(`Home.${item}`)}</a>
            </li>
          ))}
      </Scrollspy>
    </div>
  );
};

export default TopMenu;
