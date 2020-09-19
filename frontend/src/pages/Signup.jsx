import React, {useState } from 'react';
import { OutlinedInput, Button } from '@material-ui/core';
export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (e) => { setUsername(e.target.value)}
    const onPasswordChange = (e) => { setUsername(e.target.value)}
    const onClick = () => {
        console.log(username)
    }
    return (
        <div>
            <OutlinedInput onChange={onUsernameChange} type="text" />
            <OutlinedInput onChange={onPasswordChange} type="text" />
            <Button onClick={onClick} color="primary">sing up</Button>
        </div>

    )
}
