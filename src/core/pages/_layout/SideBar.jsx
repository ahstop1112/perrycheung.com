import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Collapse, Typography, List } from '@mui/material';
import useRoutes from 'core/store/hooks/useRoutes';
//  Add core routes, don't need to touch
import { AuthLayoutRoutes, CoreRoutes } from 'core/routes';
//  Add ipms routes
import { IpmsCoreRoutes } from 'ipms/core/routes';
import SideBarCategory from 'core/pages/_layout/SideBarCategory';
import SideBarLink from 'core/pages/_layout/SideBarLink';
import SideBarStyles from 'core/pages/_layout/styles/SideBar';

const NavLink = React.forwardRef((props, ref) => <RouterNavLink innerRef={ref} {...props} />);

const SideBar = () => {
  const classes = SideBarStyles();
  const { userStorage } = useAuth();
  const { authoritiesRoutes } = useRoutes();
  const MainLayoutRoutes = [...AuthLayoutRoutes, ...IpmsCoreRoutes, ...CoreRoutes]; // Combine routes
  const filteredRoutes = authoritiesRoutes(userStorage?.authorities, MainLayoutRoutes);

  const initOpenRoutes = () => {
    const pathName = window.location?.pathname;
    let routes = {};

    if (filteredRoutes) {
      filteredRoutes.map((route, index) => {
        const isActive = pathName.indexOf(route.path) === 0;
        const isOpen = route.open;
        const isHome = !!(route.containsHome && pathName === '/');

        routes = { ...routes, [index]: isActive || isOpen || isHome };
        return routes;
      });
    }

    return routes;
  };

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());

  const toggle = (index) => {
    // Collapse all elements
    Object.keys(openRoutes).map((item) => openRoutes[index] || setOpenRoutes(() => ({ ...openRoutes, [item]: false })));
    // Toggle selected element
    setOpenRoutes(() => ({ ...openRoutes, [index]: !openRoutes[index] }));
  };

  return (
    <PerfectScrollbar className={classes.scrollBar}>
      <List disablePadding className={classes.list}>
        <div className={classes.items}>
          {filteredRoutes &&
            filteredRoutes.map((category, index) => (
              <React.Fragment key={category.id}>
                {category.header ? <Typography className={classes.sideBarSection}>{category.header}</Typography> : null}
                {category.children && category.children.length > 0 ? (
                  <React.Fragment key={category.children.id}>
                    <SideBarCategory
                      isOpen={!openRoutes[index]}
                      isCollapsable
                      showOnMenu={category.showOnMenu}
                      name={category.id}
                      to={category.path}
                      icon={category.icon}
                      onClick={() => toggle(index, category.path)}
                    />
                    <Collapse in={openRoutes[index]} timeout='auto' unmountOnExit>
                      {category.children.map((childRoute) => (
                        <SideBarLink
                          key={childRoute.id}
                          name={childRoute.id}
                          showOnMenu={childRoute.showOnMenu}
                          to={childRoute.path}
                          // icon={childRoute.icon}
                          className={classes.linkText}
                          className2={classes.linkBadge}
                          className3={classes.link}
                        />
                      ))}
                    </Collapse>
                  </React.Fragment>
                ) : (
                  <SideBarCategory
                    isOpen={!openRoutes[index]}
                    isCollapsable={false}
                    showOnMenu={category.showOnMenu}
                    name={category.id}
                    to={category.path}
                    activeClassName='active'
                    component={NavLink}
                    icon={category.icon}
                    exact
                  />
                )}
              </React.Fragment>
            ))}
        </div>
      </List>
    </PerfectScrollbar>
  );
};

export default SideBar;
