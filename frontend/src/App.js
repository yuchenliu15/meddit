import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles, Typography, Grid} from '@material-ui/core';
import './App.css';
import CommunityItem from './components/community/CommunityItem';
import CommunityPost from './pages/CommunityPost';
import Community from './pages/Community';
import Medical from './pages/Medical';

const useStyles = makeStyles((theme) => ({

}));



const App = (props) => {
  const classes = useStyles();
  return (
    // <CommunityPost></CommunityPost> 
    // <Community></Community>
    <Community></Community>
    // <CommunityPost></CommunityPost>
    
  )
}
export default App;