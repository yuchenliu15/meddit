import React, {useState, useEffect} from 'react';
import {Button, Card, Grid, CardContent, makeStyles, Divider, Typography, CheckBox} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { URL } from "../../constants.js";

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        height: '100%',
        backgroundColor: '#FFF',
    },
    textInput: {
        color: '#AEAEAE',
    },
    submitBtn: {
        backgroundColor: '#9066FF',
        color: '#fff',
        textTransform: 'none',
        marginTop: '1rem',
    },
    cancelBtn: {
        border: '1px solid #DAE0E6',
        color: '#9066FF',
        textTransform: 'none',
        marginTop: '1rem',
    },

}));

const CommentCreate = (props) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);


    const onSubmit = () => {
        if (isLoaded) {
            setIsLoaded(false);
        }
        if(text != null){
            fetch(`${URL}/posts/${localStorage.getItem('currentPost')}/comments`, {
                method: 'POST',
                headers: {
                    'Authorization': props.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: localStorage.getItem('user'), content: text}),
            })
            .then((res) => {
                res.json();
            })
            .then(() => {
                props.incrState();
                setIsLoaded(true);
                onCancel();
            },
            (error) => {
                console.log(error);
            });
        }
    }


    const onCancel = () => {
        setText('');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <Card className = {classes.container}>
            <CardContent className = {classes.content}>
                <InputBase 
                    className = {classes.textInput}
                    multiline
                    rows = {4}
                    placeholder="Write a new post, ask questions about your health, ask for reccomendtions for doctors, or just talk to someone"
                    fullWidth
                    margin = 'none'
                    value = {text}
                    onChange = {handleChange}
                />
                <Divider />
                <Grid container  direction = 'row' justify = 'flex-end' style = {{paddingTop: '10px'}} spacing = {2}>
                    <Grid item>
                        <Button size='small' onClick = {onCancel} className = {classes.cancelBtn}>Cancel</Button>
                    </Grid>
                    <Grid item>
                        <Button size='small'  onClick = {onSubmit} className = {classes.submitBtn}>Post</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CommentCreate;