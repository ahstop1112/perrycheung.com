import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings } from 'react-feather';
import { useTheme } from '@mui/system';
import { useMediaQuery, Avatar, Card, Menu, MenuItem, IconButton } from '@mui/material';
import useAuth from 'core/store/hooks/useAuth';
import useApiHandler from 'core/store/hooks/useApiHandler';
import { AlertDialogs } from 'components';
import { Logout } from 'core/services/Auth';
import NavBarStyles from 'core/pages/_layout/styles/NavBar';

const TopUserMenu = () => {
  const theme = useTheme();
  const classes = NavBarStyles();
  const { t } = useTranslation();
  const { dispatch, userStorage } = useAuth();
  const { displayName, estateInfo } = userStorage;
  const { dispatch: apiHandlerDispatch } = useApiHandler();
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const handleLink = () => setOpen(false);
  const toggleMenu = (event) => setAnchorMenu(event.currentTarget);
  const closeMenu = () => setAnchorMenu(null);
  const handleLogout = () => setOpen(true);

  const alert4logout = {
    okFun: () => {
      Logout()
        .then((res) => {
          if (res?.data?.status === 0) {
            dispatch({ type: 'LOGOUT' });
            setOpen(false);
          }
        })
        .catch((error) => apiHandlerDispatch({ type: 'HANDLE_ERROR', error }))
        .finally(() => dispatch({ type: 'SET_LOADING', isLoading: false }));
    },
  };

  return (
    <>
      <Card className={useMediaQuery(theme.breakpoints.up('md')) ? classes.userArea : classes.userMobileArea}>
        <Avatar alt={displayName} className={classes.avatar} />
        <p className={classes.userName}>
          {displayName} {estateInfo.length > 0 ? `(${estateInfo[0].estate_title_enHK})` : ''}
        </p>
      </Card>
      <div className={classes.stroke}>|</div>
      <IconButton
        aria-owns={anchorMenu ? 'menu-appbar' : undefined}
        aria-haspopup='true'
        onClick={toggleMenu}
        color='primary'
        className={classes.settings}>
        <Settings />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
        className={classes.userMenu}>
        <MenuItem
          className={classes.itemLink}
          onClick={() => {
            window.location.href = '/cms/admin/settings';
          }}>
          {t('commons.settings')}
        </MenuItem>
        <MenuItem
          className={classes.itemLink}
          onClick={() => {
            window.location.href = '/cms/admin/password';
          }}>
          {t('commons.updatePassword')}
        </MenuItem>
        <MenuItem className={classes.itemLink} onClick={handleLogout}>
          {t('commons.logout')}
        </MenuItem>
      </Menu>
      <AlertDialogs open={open} onCancel={handleLink} onOk={alert4logout.okFun} />
    </>
  );
};

export default TopUserMenu;
