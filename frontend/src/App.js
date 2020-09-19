import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, Typography} from '@material-ui/core';
import './App.css';

let theme = createMuiTheme({

});


theme = responsiveFontSizes(theme);

const App = (props) => {
  return (
    <Typography>Hello World</Typography>
  )
}
export default App;