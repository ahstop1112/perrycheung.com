import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import Social from '../Home/Social';
import TopMobileMenu from './TopMobileMenu';

const useStyles = makeStyles((theme) => ({
  topMobileBar: {
    width: `100%`,
    height: `auto`,
    position: `relative`,
    top: 0,
    left: 0,
    display: `none`,
    zIndex: 10,
    '& .white-fill-bg.btn_sm': {
      marginTop: 20,
    },
  },
  topbarMobileInner: {
    width: `100%`,
    height: `auto`,
    float: `left`,
    clear: `both`,
    backgroundColor: theme.palette.text[5],
    padding: `20px 0px`,
    boxShadow: `0 10px 40px 0 rgba(62, 68, 125, 0.1)`,
    '& .topbar_in': {
      width: `100%`,
      height: `auto`,
      clear: `both`,
      float: `left`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    },
  },
}));

const MobileHeader = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);
  const menuItems = ['home', 'about', 'portfolio', 'news', 'contact'];

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className='tm_mobile_menu'>
      <div className='topbar_inner'>
        <div className='container bigger'>
          <div className='topbar_in'>
            <div className='logo'>
              <NavLink to='/'>
                <img src='/img/logo/dark.png' alt='partners brand' />
              </NavLink>
            </div>
            {/* End logo */}
            <div className='my_trigger' onClick={handleClick}>
              <div className={click ? 'hamburger hamburger--collapse-r is-active' : 'hamburger'}>
                <div className='hamburger-box'>
                  <div className='hamburger-inner'></div>
                </div>
              </div>
              {/* End hamburger menu */}
            </div>
          </div>
        </div>
      </div>
      <div className={click ? 'dropdown active' : 'dropdown'}>
        <div className='container'>
          <span className='close_menu' onClick={handleClick}>
            close
          </span>
          <div className='dropdown_inner'>
            <TopMobileMenu menuItems={menuItems} />
            <div className='social-menu'>
              <Social />
            </div>
            {/* End social share */}
          </div>
        </div>
        {/* End container */}
      </div>
    </div>
  );
};

export default MobileHeader;
