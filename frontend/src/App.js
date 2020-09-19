import React, {useEffect, useState} from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles, Typography, Grid} from '@material-ui/core';
import './App.css';
import CommunityItem from './components/community/CommunityItem';
import CommunityPost from './pages/CommunityPost';
import Community from './pages/Community';
import Medical from './pages/Medical';
import Singup from './pages/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({

}));



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
        <Switch>
          <Route path="/post">
            <CommunityPost></CommunityPost> 
          </Route>
          <Route path="/community">
            <Community></Community>
          </Route>
          <Route path="/signup">
            <Singup updateUser={updateUser} ></Singup>
          </Route>
          <Route path="/">
            <Medical user={user}></Medical>
          </Route>
        </Switch>
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