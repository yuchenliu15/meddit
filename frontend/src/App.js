import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles, Typography, Grid} from '@material-ui/core';
import './App.css';
import CommunityItem from './components/community/CommunityItem';
import CommunityPost from './pages/CommunityPost';
import Community from './pages/Community';
import Medical from './pages/Medical';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({

}));



const App = (props) => {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/post">
            <CommunityPost></CommunityPost> 
          </Route>
          <Route path="/community">
            <Community></Community>
          </Route>
          <Route path="/">
            <Medical></Medical>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}
export default App;