import React, {useState } from 'react';
import { OutlinedInput, Button } from '@material-ui/core';
import axios from 'axios'
export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (e) => { setUsername(e.target.value)}
    const onPasswordChange = (e) => { setPassword(e.target.value)}
    const onClick = () => {
        axios.post('http://localhost:3000/users/create',
            {
                username,
                password
            }).then((data) => {
                console.log(data)
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
