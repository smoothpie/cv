import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Construction from './components/Construction/Construction';
import MainPage from './components/MainPage/MainPage';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
	    <Route exact path='/' component={Construction} />
      <Route path='/cv' component={MainPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('main')
);
