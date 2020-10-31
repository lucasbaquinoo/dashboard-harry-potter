import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/404';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes;