import React, {useState, useEffect} from 'react';
import {
    Grid, 
    Typography, 
    makeStyles, 
    Box, 
    TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        body: {
            backgroundColor: '#8f66ff'
        },

        Form: {
        display: 'flex',
        flexFlow: 'column',
        },

        Container: {
            width: '30%',
            margin: 'auto',
            backgroundColor: 'white',
            backgroundColor: '#8f66ff',
            padding: '50px 20px 50px 20px'
        },

       

    }
})


const Login = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.Container}>
            <Typography>Login</Typography>
            <form className={classes.Form}>
                <TextField 
                    InputProps={{
                        
                    }}
                    InputLabelProps={{
                        
                    }}
                id="standard-basic" label='Email' size='small'/>
                <TextField  id="standard-basic" label='Password' />
            </form>
        </Box>

    )
}

export default Login;