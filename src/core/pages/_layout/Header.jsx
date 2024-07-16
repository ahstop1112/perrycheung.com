import React, { useState } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import TopMenu from './TopMenu';
import Social from '../Home/Social';
import MobileHeader from './MobileHeader';

const useStyles = makeStyles((theme) => ({
  topBar: {
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    transition: `all 0.3s ease`,
  },
  topBarInner: {
    width: `100%`,
    height: `auto`,
    clear: `both`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    padding: `25px 50px`,
    transition: `all 0.3s ease`,
    '&.opened': {
      backgroundColor: theme.palette.text[5],
      padding: `20px 50px`,
      boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.1)`,
    },
    '& .logo a': {
      display: `inline-block`,
    },
  },
  //   .perry_tm_topbar .menu ul {
  //     margin: 0px;
  //     list-style-type: none;
  //   }
  //   .perry_tm_topbar .menu ul li {
  //     margin: 0px;
  //     display: inline-block;
  //   }
  //   .perry_tm_topbar .menu ul li {
  //     margin: 0px 25px 0px 0px;
  //     display: inline-block;
  //   }
  //   .perry_tm_topbar .menu ul li:last-child {
  //     margin-right: 0px;
  //   }
  //   .perry_tm_topbar .menu ul li a {
  //     text-decoration: none;
  //     color: #000;
  //     font-weight: 500;
  //     font-family: 'Poppins';

  //     -webkit-transition: all 0.3s ease;
  //     -moz-transition: all 0.3s ease;
  //     -ms-transition: all 0.3s ease;
  //     -o-transition: all 0.3s ease;
  //     transition: all 0.3s ease;
  //   }
  //   .perry_tm_topbar .menu ul li a {
  //     color: #222;
  //     position: relative;
  //     &::before {
  //       content: '';
  //       position: absolute;
  //       left: 0;
  //       bottom: -5px;
  //       width: 0;
  //       background: currentcolor;
  //       height: 2px;
  //       transition: 0.3s;
  //     }
  //   }
  //   .perry_tm_topbar .menu ul li.current a {
  //     &::before {
  //       width: 100%;
  //     }
  //   }
}));

const Header = () => {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <header className='tm_topbar'>
        <Grid className={`topbar_inner ${navbar || location.pathname.includes('/portfolio') ? `opened` : ``}`}>
          <div className='logo'>
            <NavLink to='/'>
              <img
                src={`/img/logo/light.png`}
                alt='Perry Cheung'
              />
            </NavLink>
          </div>
          <TopMenu />
        </Grid>
      </header>
      <MobileHeader />
    </>
  );
};

export default Header;
