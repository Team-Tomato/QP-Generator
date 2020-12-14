import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layout/App';
import { Route, Switch, HashRouter } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" render={props => <App {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);