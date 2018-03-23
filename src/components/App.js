import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import MainPageLogged from './MainPageLogged/MainPageLogged';
import EventCalendar from './EventCalendar/EventCalendar';

const NavRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={matchProps => (
    <MainPageLogged>
      <Component {...matchProps} />
    </MainPageLogged>
  )} />
)

const App = () => (
  <Switch>
	  <Route exact path='/' component={MainPage} />
    <NavRoute path='/home' component={EventCalendar} />
  </Switch>
)

export default App;
