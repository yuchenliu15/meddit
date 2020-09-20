import React, {useState } from 'react';
import {Typography, Box} from '@material-ui/core';

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
            <OutlinedInput onChange={onUsernameChange} type="text" />
            <OutlinedInput onChange={onPasswordChange} type="password" />

            <br></br>

            <Typography variant = 'subtitle2'>
                <Box fontWeight = 'bold'>
                    Sex
                </Box>
            </Typography>
            <OutlinedInput onChange={onSexChange} type="text" />

            <br></br>

            <Typography variant = 'subtitle2'>
                <Box fontWeight = 'bold'>
                    Age
                </Box>
            </Typography>
            <OutlinedInput onChange={onAgeChange} type="number" />

            <br></br>

            <Button onClick={onClick} color="primary">sign up</Button>
        </div>

    )
}
