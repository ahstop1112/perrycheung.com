//  General JS Library importation
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'core/store/hooks/useAuth'; //  Getting the authentication data or functions from useAuth
import useApiHandler from 'core/store/hooks/useApiHandler'; //  Getting the API Handler dispatch from useApiHandler (Red Box on the right top)
import useRoutes from 'core/store/hooks/useRoutes';
//  Framework Components
// import NotificationPopUp from 'components/NotificationPopUp';
import { AuthLayoutRoutes } from 'core/routes';
import MainLayout from 'core/pages/_layout/MainLayout';
import NotFoundPage from 'core/pages/NotFoundPage';
// import UnAuthenticatedPage from 'core/pages/UnAuthenticatedPage';

const authRoutes = (Layout, routes) =>
  routes.map(({ path, component: Component, id }) => (
    <Route
      exact
      key={id}
      path={path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
    />
  ));

const childRoutes = (Layout, filteredRoutes) =>
  filteredRoutes.map(({ component: Component, children, id: filteredId, effectivePath }) =>
    children ? (
      // Route item with children
      children.map(
        ({
          component: ChildComponent,
          id: childId,
          path: childPath,
          effectivePath: childEffectivePath,
          effectivePageActionPath: childEffectivePageActionPath,
        }) => {
          // console.log(childEffectivePath);
          // console.log(childEffectivePageActionPath);
          if (childEffectivePageActionPath) {
            return (
              <>
                {Object.entries(childEffectivePageActionPath).map(([childPageAction, childPageActionPath]) => {
                  return (
                    <Route
                      key={`${childId}-${childPageAction}`}
                      path={childPageActionPath}
                      exact
                      element={
                        <Layout>
                          <ChildComponent pageAction={childPageAction} />
                        </Layout>
                      }
                    />
                  );
                })}
              </>
            );
          } else {
            return (
              <Route
                key={`${childId}`}
                path={childEffectivePath}
                exact
                element={
                  <Layout>
                    <ChildComponent />
                  </Layout>
                }
              />
            );
          }
        },
      )
    ) : (
      <Route
        exact
        key={filteredId}
        path={effectivePath}
        element={
          <Layout>
            <Component />
          </Layout>
        }
      />
    ),
  );

const MainRoutes = () => {
  const { AuthState, userStorage, type } = useAuth();
  const { status } = userStorage || {};
  const { ApiHandlerState } = useApiHandler();
  const { toastList } = ApiHandlerState;
  const { filteredRoutes } = useRoutes();

  return (
    <>
      {/* {toastList.length > 0 && <NotificationPopUp toastList position='top-right' />} */}
      <Routes>
        {type === 'FORM' && authRoutes(MainLayout, AuthLayoutRoutes)}
        {status === 'AUTHENTICATED' && AuthState && childRoutes(MainLayout, filteredRoutes)}
        {/* {status === 'AUTHENTICATED' && AuthState && (
          <Route exact path='/' element={<Navigate replace to={DEFAULT_PAGE_PATH} />} />
        )} */}
        {/* {!userStorage && type === 'FORM' && <Route path='*' element={<Navigate replace to='/login' />} />} */}
        <Route path='/404' element={<NotFoundPage />} />
        {AuthState && userStorage && <Route path='*' element={<NotFoundPage />} />}
      </Routes>
    </>
  );
};

export default MainRoutes;
