import _ from 'lodash';
import useAuth from 'core/store/hooks/useAuth';
import { CoreRoutes } from 'core/routes';

const useRoutes = () => {
  const defaultRoutes = [...CoreRoutes]; // Combine routes
  const { roles } = useAuth();

  const authoritiesRoutes = () => {
    let filteredRoutes = [];

    // Parent Routes
    defaultRoutes &&
      defaultRoutes.map(route => {
        // Parent Routes
        if (route.children === null && typeof route.permissionId === 'object') {
          // console.log(route);
          return filteredRoutes.indexOf(route) === -1 && filteredRoutes.push(route);
        } else if (route.children && route.children.length > 0) {
          // Children Routes
          route.children
            .filter(subRoute => typeof subRoute.permissionId === 'object')
            .map(subRoute => {
              const tmpPerrmissionArr = [];
              const path = subRoute?.path;
              const pathOne = `${path.split('(')[0]}(`;
              const pathTwo = `)${path.split(')')[1]}`;
              let pageActionPath = ``;

              subRoute.permissionId
                .filter(permissionRoute => typeof permissionRoute === 'object')
                .map(permissionRoute => {
                  const permissionIdLength = Object.keys(permissionRoute).filter(
                    permissionKey => _.intersection(roles, permissionRoute[permissionKey]).length > 0,
                  ).length;

                  Object.keys(permissionRoute)
                    .filter(permissionKey => _.intersection(roles, permissionRoute[permissionKey]).length > 0)
                    .map(permissionKey => {
                      tmpPerrmissionArr.push({ [permissionKey]: permissionRoute[permissionKey] });
                      subRoute.permissionId = tmpPerrmissionArr.length > 0 ? tmpPerrmissionArr : subRoute.permissionId;

                      if (path.includes('pageAction') && permissionIdLength > 0) {
                        pageActionPath += `${permissionKey}|`;
                      }
                      subRoute.path = path.includes('pageAction') ? `${pathOne}${pageActionPath}${pathTwo}` : path;
                      return filteredRoutes.indexOf(route) === -1 && filteredRoutes.push(route);
                    });
                  return permissionRoute;
                });
              return subRoute.permissionId;
            });
        }
        return route;
      });

    filteredRoutes = filteredRoutes.sort((a, b) => a.order - b.order);

    return filteredRoutes;
  };

  const filteredRoutes = authoritiesRoutes();

  return { filteredRoutes };
};

export default useRoutes;
