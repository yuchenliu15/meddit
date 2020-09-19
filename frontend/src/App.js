import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, Typography} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Community from './pages/Community';
import CommunityItem from './components/CommunityItem';
import Login from './UserAuth/Login';
import './App.css';

let theme = createMuiTheme({

});


theme = responsiveFontSizes(theme);

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Community />
        </Route>
        <Route path='/post'>
          <CommunityItem />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;