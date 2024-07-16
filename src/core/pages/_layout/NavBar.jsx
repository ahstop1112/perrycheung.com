import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, SwipeableDrawer, Grid, IconButton } from '@mui/material';
import { useTheme } from '@mui/system';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { logoWhite } from 'components/Icons';
// import TopSearchBar from 'core/pages/_layout/TopSearchBar';
import SideBar from 'ipms/core/pages/_layout/IpmsSideMenu';
import TopUserMenu from 'core/pages/_layout/TopUserMenu';
import { DEFAULT_PAGE_PATH, SIDEBAR_WIDTH } from 'utility/constants';
import NavBarStyles from 'core/pages/_layout/styles/NavBar';

const NavBar = ({ handleDrawerToggle, toggleDrawer }) => {
  const classes = NavBarStyles();
  const theme = useTheme();
  const isDesktop = window.innerWidth > 991;
  const drawerType = isDesktop ? 'persistent' : 'temporary';

  return (
    <>
      <AppBar className={classes.header}>
        <Grid className={classes.headerContent}>
          <Grid container item className={classes.logoContainer}>
            <a href={DEFAULT_PAGE_PATH}>
              <img alt='logo' className={classes.logo} src={logoWhite} />
            </a>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.mobileButton}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item lg md sm xs className={classes.accountContainer}>
            <TopUserMenu />
          </Grid>
        </Grid>
      </AppBar>
      <SwipeableDrawer
        className={toggleDrawer ? classes.drawer : classes.openDrawer}
        variant={drawerType}
        open={toggleDrawer}
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}>
        <Grid container item lg={12} className={classes.accountMobileContainer}>
          <Grid container item xs={9}>
            <TopUserMenu />
          </Grid>
          <Grid container item xs={3}>
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <SideBar PaperProps={{ style: { width: SIDEBAR_WIDTH } }} open={toggleDrawer} onClose={handleDrawerToggle} />
      </SwipeableDrawer>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};
