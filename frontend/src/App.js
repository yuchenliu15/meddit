import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles, Typography, Grid} from '@material-ui/core';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './App.css';
import CommunityItem from './components/community/CommunityItem';
import CommunityPost from './pages/CommunityPost';
import Community from './pages/Community';
import Medical from './pages/Medical';
import Singup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({

}));

const notificationOptions = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const App = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  const updateUser = (newUserData) => {
    Object.assign(user, newUserData);
    setUser(user)
  }

  return (
    <Router>
      <div>
        <Provider template={AlertTemplate} {...notificationOptions}>
          <Switch>
            <Route path="/post">
              <CommunityPost></CommunityPost> 
            </Route>
            <Route path="/community">
              <Community user = {user}></Community>
            </Route>
            <Route path="/signup">
              <Singup updateUser={updateUser} ></Singup>
            </Route>
            <Route path="/login">
              <Login updateUser={updateUser} ></Login>
            </Route>
            <Route exact path="/">
              <Medical user={user}></Medical>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
    
  )
}
export default App;

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }