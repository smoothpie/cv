import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Construction from './components/Construction/Construction';
import MainPage from './components/MainPage/MainPage';

ReactDOM.render(
  <HashRouter>
    <Switch>
	    <Route exact path={process.env.PUBLIC_URL + '/'} component={Construction} />
      <Route path={process.env.PUBLIC_URL + '/cv'} component={MainPage} />
    </Switch>
  </HashRouter>,
  document.getElementById('main')
);
