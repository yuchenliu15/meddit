import React, {useState } from 'react';
import { OutlinedInput, Button } from '@material-ui/core';
import axios from 'axios'
import { useCookies } from 'react-cookie';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['auth_token']);

    const onUsernameChange = (e) => { setUsername(e.target.value)}
    const onPasswordChange = (e) => { setPassword(e.target.value)}
    const onClick = () => {
        axios.post('http://localhost:3000/users/create',
            {
                username,
                password
            }).then((res) => {
                console.log(res.data)
                setToken('auth_token', res.data)
            }).catch(e => {
                console.log(e)
            })
    }
    return (
        <div>
            <OutlinedInput onChange={onUsernameChange} type="text" />
            <OutlinedInput onChange={onPasswordChange} type="text" />
            <Button onClick={onClick} color="primary">sing up</Button>
        </div>

    )
}
