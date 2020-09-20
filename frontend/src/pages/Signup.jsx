import React, {useState } from 'react';
import {Typography, Box, TextField, Select, MenuItem} from '@material-ui/core';

import { OutlinedInput, Button } from '@material-ui/core';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

export default ({updateUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');

    const [token, setToken] = useCookies(['auth_token']);
    const history = useHistory();

    const onUsernameChange = (e) => { setUsername(e.target.value)}
    const onPasswordChange = (e) => { setPassword(e.target.value)}
    const onSexChange = (e) => { setSex(e.target.value)}
    const onAgeChange = (e) => { setAge(e.target.value)}

    const onClick = () => {
        axios.post('http://localhost:3000/users/create',
            {
                username,
                password,
                sex,
                age
            }).then((res) => {
                updateUser({id: username})
                setToken('auth_token', res.data)
                history.push('/');
            }).catch(e => {
                console.log(e)
            })
    }
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br>

            <Typography>
                Username and Password
            </Typography>

            <OutlinedInput onChange={onUsernameChange} type="text" />
            <OutlinedInput onChange={onPasswordChange} type="password" />

            <br></br><br></br><br></br><br></br><br></br>

            <Typography>
                Sex:
            </Typography>
            <Select onChange={onSexChange} id="select">
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
            </Select>

            <TextField onChange={onAgeChange} type="number"
                InputProps={{
                    inputProps: { 
                        max: 130, min: 6 
                    }
                }}
            label="Age"/>


            <br></br>

            <Button onClick={onClick} color="primary">sign up</Button>
        </div>

    )
}
