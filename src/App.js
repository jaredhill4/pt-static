// @flow

// Vendors
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './config/routes';

// Components
import { Page } from './components';

// Styles
import './styles/index.scss';

const App = () => (
  <Router>
    <Switch>
      {routes.map(({ path, exact, ...routeProps }) => (
        <Route key={path} exact={exact} path={path}>
          <Suspense fallback={<div>Loading...</div>}>
            <Page {...routeProps} />
          </Suspense>
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
