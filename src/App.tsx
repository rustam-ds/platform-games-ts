import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'src/utils/routes';
import { routesPath } from 'src/utils/routes/routesPath';

export const App: FC = () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.id} path={route.path} exact={route.exact} component={route.component} />
    ))}
    <Redirect to={routesPath.index} />
  </Switch>
);
