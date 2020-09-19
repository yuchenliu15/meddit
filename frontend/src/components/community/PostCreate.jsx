import React, {useState} from 'react';
import {Button, Card, Grid, CardContent, makeStyles, Divider, Typography, CheckBox} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

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

}));

const PostCreate = (props) => {
    const classes = useStyles();

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
                    // value = {text}
                    // onChange = {handleChange}
                />
                <Divider />
                <Button size='small' className = {classes.submitBtn}>Post</Button>
            </CardContent>
        </Card>
    )
}

export default PostCreate;