import React, {useState} from 'react';
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
        border: '1px solid #DAE0E6',
        color: '#AEAEAE',
        padding: '20px 20px 20px 20px',
        borderRadius: '5px',
        marginTop: '20px',
    },
    submitBtn: {
        backgroundColor: '#38D18E',
        color: '#fff',
        textTransform: 'none',
        marginTop: '1rem',
    },
    cancelBtn: {
        border: '1px solid #38D18E',
        color: '#38D18E',
        textTransform: 'none',
        marginTop: '1rem',
    },

}));

const PostCreate = (props) => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');

    const [isLoaded, setIsLoaded] = useState(true);

    
    

    const onSubmit = () => {
        if (isLoaded) {
            setIsLoaded(false);
        }
        if(text != null | title != null){
            fetch(`${URL}/communities/${props.community_id}/posts`, {
                method: 'POST',
                headers: {
                    'Authorization': props.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: localStorage.getItem('user'),content: text,title: title,topic: "All",description: description}),
            })
            .then((res) => {
                // res.json();
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
        setTitle('');
        setText('');
        setDescription('');
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    const handleDescChange = (event) => {
        setDescription(event.target.value);
    }

    return (
        <Card className = {classes.container}>
            <CardContent className = {classes.content} spacing = {2}>
                <Typography variant = 'h6'>Create a Post</Typography>
                <InputBase 
                    className = {classes.textInput}
                    multiline
                    rows = {1}
                    placeholder="Write your title"
                    fullWidth
                    margin = 'none'
                    value = {title}
                    onChange = {handleTitleChange}
                />
                <InputBase 
                    className = {classes.textInput}
                    multiline
                    rows = {1}
                    placeholder="Write your summary"
                    fullWidth
                    margin = 'none'
                    value = {description}
                    onChange = {handleDescChange}
                />
                <InputBase 
                    className = {classes.textInput}
                    multiline
                    rows = {4}
                    placeholder="Write a new post, ask questions about your health, ask for reccomendtions for doctors, or just talk to someone"
                    fullWidth
                    margin = 'none'
                    value = {text}
                    onChange = {handleTextChange}
                />
                <Grid container  direction = 'row' justify = 'flex-end' style = {{paddingTop: '10px'}} spacing = {2}>
                    <Grid item>
                        <Button size='small' onClick = {onCancel} className = {classes.cancelBtn}>Cancel</Button>
                    </Grid>
                    <Grid item>
                        <Button size='small' onClick = {onSubmit} className = {classes.submitBtn}>Post</Button>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default PostCreate;