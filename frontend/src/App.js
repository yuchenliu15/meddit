import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles, Typography, Grid} from '@material-ui/core';
import './App.css';
import CommunityItem from './components/CommunityItem';
import CommunityPost from './pages/CommunityPost';
import Community from './pages/Community';

const useStyles = makeStyles((theme) => ({

}));



const App = (props) => {
  const classes = useStyles();
  return (
    <Community></Community>
    
  )
}
export default App;