// Auth components
// import LoginPage from 'core/pages/LoginPage';
// const Page404  import("pages/Page404"));
// const Page500  import("pages/Page500"));

// Admin Pages
import HomePage from 'core/pages/HomePage';
import PortfolioPage from 'core/pages/PortfolioPage';
// import NotFound from '.core/pages/NotFound';

const HomeRoutes = {
  id: 'Home',
  path: '/',
  icon: null,
  component: HomePage,
  permissionId: [],
  children: null,
  showOnMenu: true,
};

const PortfolioRoutes = {
  id: 'portfoilo',
  order: 2,
  name: 'portfolio-link',
  path: '/portfolio/:tag',
  component: PortfolioPage,
  permissions: [],
  icon: null,
  children: null,
  showOnMenu: true,
};

const PortfolioRoutes2 = {
  id: 'portfoilo',
  order: 2,
  name: 'portfolio-link',
  path: '/portfolio/:tag/:year',
  component: PortfolioPage,
  permissions: [],
  icon: null,
  children: null,
  showOnMenu: true,
};

const PortfolioRoutes3 = {
  id: 'portfoilo',
  order: 2,
  name: 'portfolio-link',
  path: '/portfolio',
  component: PortfolioPage,
  permissions: [],
  icon: null,
  children: null,
  showOnMenu: true,
};

const PortfolioContentRoutes = {
  id: 'portfoilo',
  order: 2,
  name: 'portfolio-content',
  path: '/portfolio/:tag/:year/:slug',
  component: PortfolioPage,
  permissions: [],
  icon: null,
  children: null,
  showOnMenu: true,
};

// const Page404Routes = {
//   id: "Page404",
//   path: "/web/admin/404",
//   icon: <User />,
//   component: Page404,
//   children: null,
//   showOnMenu: false
// }

// const Page500Routes = {
//   id: "Page500",
//   path: "/web/admin/500",
//   icon: <User />,
//   component: Page500,
//   children: null,
//   showOnMenu: false
// };

// Routes using the TaskList layout
export const CoreRoutes = [HomeRoutes, PortfolioRoutes, PortfolioRoutes2, PortfolioRoutes3, PortfolioContentRoutes];
// export const AdminUserRoutes = [DashboardRoutes, AdminRoutes, PropertyRoutes, PasswordRoutes, SettingsRoutes];

// Routes using the Auth layout
export const AuthLayoutRoutes = [
  HomeRoutes,
  PortfolioRoutes,
  PortfolioRoutes2,
  PortfolioRoutes3,
  PortfolioContentRoutes,
  //   Page404Routes,
  //   Page500Routes,
  //   changePasswordRoutes
];
