import React, {useState } from 'react';
import { OutlinedInput, Button, Grid, makeStyles, Typography, Input, Link } from '@material-ui/core';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

import Image from '../assets/background.svg';
import Logo from '../assets/logo2.png';

import { URL } from "../constants.js";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Image})`,

    },
    field: {
        width: '20rem',
        fontSize: '.9rem',
    },
    button: {
        backgroundColor: '#3AD390',
        color: '#fff',
        padding: '0.5rem',
        width: '20rem',
        boxShadow: '0px 4px 10px rgba(16, 156, 241, 0.24)',
        borderRadius: '4px',
        textTransform: 'none',
    },
    link: {
        color: '#47C594',
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: '#9066FF',
        color: '#fff',
        textTransform: 'none',
        marginTop: '1rem',
    },

}));



export default ({updateUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['auth_token']);
    const history = useHistory();
    const classes = useStyles();

    const onUsernameChange = (e) => { setUsername(e.target.value)}
    const onPasswordChange = (e) => { setPassword(e.target.value)}
    const onClick = () => {
        axios.post(URL+'/users/login',
            {
                username,
                password
            }).then((res) => {
                updateUser({id: username})
                localStorage.setItem('username', username)
                setToken('auth_token', res.data)
                history.push({pathname: '/'});
                localStorage.setItem('user', username)
            }).catch(e => {
                console.log(e)
            })
    }
    return (
        <div className = {classes.container}>
            <Grid container justify='center' alignItems='center' style={{width: '100vw', height: '100vh'}}>
                <Grid item>
                    <Grid container direction = "column" alignItems = "flex-start" justify = 'center' spacing = {5}>
                        <Grid item>
                            <img className = {classes.logo} src={Logo}></img>
                        </Grid>
                    <Grid item><Typography variant='h4' style={{fontWeight: 'bold', color: '#334D6E'}}>Sign In</Typography></Grid>
                    <Grid item>
                        <Input required onChange={onUsernameChange}  placeholder="Email" className={classes.field} type = "text"/>
                    </Grid>
                    <Grid item>
                        <Input required onChange={onPasswordChange}  placeholder="Password" className={classes.field} type = "password"/>
                    </Grid>
                    <Grid item>
                        <Button onClick={onClick} className = {classes.button}>Log In</Button>
                    </Grid>
                    <Grid item>
                        <Typography>Don&apos;t have an account? <Link onClick = {() => {history.push('/signup')}}>Sign Up</Link></Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
