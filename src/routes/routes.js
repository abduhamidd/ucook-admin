import React, {Fragment} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import BusinessesPage from "../pages/BusinessesPage/BusinessesPage";
import BusinessPage from "../pages/BusinessPage/BusinessPage";
import LoginPage from "../pages/LoginPage/LoginPage";

import {useSelector} from "react-redux";
import UsersPage from "pages/UsersPage";
import ProductsPage from "pages/ProductsPage/ProductsPage";

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const AltLayout = ({children}) => <Fragment>{children}</Fragment>;

const privateRoutes = [
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: () => <Redirect to='/users' />,
  },
  {
    path: "/products",
    layout: DashboardLayout,
    component: ProductsPage,
  },
  {
    path: "/businesses",
    layout: DashboardLayout,
    component: BusinessesPage,
  },
  {
    path: "/users",
    layout: DashboardLayout,
    component: UsersPage,
  },
  {
    path: "/businessrequests",
    layout: DashboardLayout,
    component: BusinessPage,
  },
];
const loginRoute = [
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: () => <Redirect to='/login' />,
  },
  {
    path: "/login",
    exact: true,
    layout: AltLayout,
    component: LoginPage,
  },
];

const Routes = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth && auth.accessToken;

  const privateRoutesList = privateRoutes.map((item, id) => {
    return (
      <AppRoute
        key={id}
        exact
        path={item.path}
        layout={item.layout}
        component={item.component}
      />
    );
  });

  const loginRouteList = loginRoute.map((item, id) => {
    return (
      <AppRoute
        key={id}
        exact
        path={item.path}
        layout={item.layout}
        component={item.component}
      />
    );
  });

  return (
    <Fragment>
      <Switch>
        {token ? privateRoutesList : loginRouteList}
        <Redirect from='*' to='/' />
      </Switch>
    </Fragment>
  );
};
export default Routes;
