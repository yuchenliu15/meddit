import React, {useState } from 'react';
import { useAlert } from 'react-alert';

import { OutlinedInput, Button, Grid, makeStyles, Typography, Input, Link, TextField, Select, MenuItem } from '@material-ui/core';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

import Image from '../assets/background.svg';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Image})`,

    },
    field: {
        width: '20rem',
        fontSize: '.9rem',
    },
    button: {
        backgroundColor: '#9066FF',
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
    }

}));


export default ({updateUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');

    const classes = useStyles();

    const [token, setToken] = useCookies(['auth_token']);
    const history = useHistory();

    const onUsernameChange = (e) => { setUsername(e.target.value)}
    const onPasswordChange = (e) => { setPassword(e.target.value)}
    const onSexChange = (e) => { setSex(e.target.value)}
    const onAgeChange = (e) => { setAge(e.target.value)}


    // alert for notifications
    const alert = useAlert();

    const onClick = () => {
        if (username == '' || password == '' || sex == '' || age == ''){
            alert.error("Please fill all parts to register!");
        }
        else{
            axios.post('http://localhost:3000/users/create',
            {
                username,
                password,
                sex,
                age
            }).then((res) => {
                alert.success("Account successfully created!");
                updateUser({id: username})
                setToken('auth_token', res.data)
                history.push('/');
            }).catch(e => {
                console.log(e)
                alert.error("Network error, account creation unsuccessful!");
            })
        }
    }
    return (
        <div className = {classes.container}>
            <Grid container justify='center' alignItems='center' style={{width: '100vw', height: '100vh'}}>
                <Grid item>
                    <Grid container direction = "column" alignItems = "flex-start" justify = 'center' spacing = {5}>
                    <Grid item><Typography variant='h4' style={{fontWeight: 'bold', color: '#334D6E'}}>Sign Up</Typography></Grid>
                    <Grid item>
                        <Input required onChange={onUsernameChange}  placeholder="Email" className={classes.field} type = "text"/>
                    </Grid>
                    <Grid item>
                        <Input required onChange={onPasswordChange}  placeholder="Password" className={classes.field} type = "password"/>
                    </Grid>
                    <Grid item>
                        <Grid container direction = 'row'>
                            <Grid item>
                                <Typography>Sex:  </Typography>
                            </Grid>
                            <Grid item>
                                <Select onChange={onSexChange} id="select">
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction = 'row'>
                            <Grid item>
                                <Typography>Age:  </Typography>
                            </Grid>
                            <Grid item>
                                <TextField onChange={onAgeChange} type="number"></TextField>
                            </Grid>
                        </Grid>
                        

                    </Grid>
                    <Grid item>
                        <Button onClick={onClick} className = {classes.button}>Sign Up</Button>
                    </Grid>
                    <Grid item>
                        <Typography>Already have an account? <Link onClick = {() => {history.push('/login')}}>Log In</Link></Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        // <div>
        //     <br></br><br></br><br></br><br></br><br></br>

        //     <Typography>
        //         Username and Password
        //     </Typography>

        //     <OutlinedInput onChange={onUsernameChange} type="text" />
        //     <OutlinedInput onChange={onPasswordChange} type="password" />

        //     <br></br><br></br><br></br><br></br><br></br>

        //     <Typography>
        //         Sex:
        //     </Typography>
        //     <Select onChange={onSexChange} id="select">
        //         <MenuItem value="Male">Male</MenuItem>
        //         <MenuItem value="Female">Female</MenuItem>
        //     </Select>

        //     <TextField onChange={onAgeChange} type="number"
        //         InputProps={{
        //             inputProps: { 
        //                 max: 130, min: 6 
        //             }
        //         }}
        //     label="Age"/>


        //     <br></br>

        //     <Button onClick={onClick} color="primary">sign up</Button>
        // </div>

    )
}
