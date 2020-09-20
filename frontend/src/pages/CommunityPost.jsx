import React, {useState, useEffect} from 'react';
import {Grid, Fade, Button, makeStyles, Typography, Box, CardContent, Card, Divider} from '@material-ui/core';
import Post from '../components/community/Post';
import Comments from '../components/community/CommentSection';
import CommentCreate from '../components/community/CommentCreate';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { URL } from "../constants.js";

import Image from '../assets/background.svg';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        maxWidth: '100vw',
        padding: '2rem 2rem 2rem 2rem',
        [theme.breakpoints.down('lg')]: {
        padding: '1rem 1rem 1rem 1rem'
        },
        backgroundImage: `url(${Image})`,
    },
    postCard: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        width: '100%',
        marginBottom: '0.5em',
    },
    active: {

    },
    heading: {
        color: '#334D6E',
    },
    cardLabel: {
        color: '#AEAEAE',
    },
    content: {
        color: '#334D6E',
    },
    symptoms: {
        color: '#fff',
        background: '#9066FF',
        padding: '3px 6px 3px 6px',
        borderRadius: '5px',
    },
    topBar: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: '#9066FF',
        padding: '1rem 3rem',
        borderRadius: '4px',
        color: '#fff',
    }

}));

const CommunityPost = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const [token, setToken] = useCookies(['auth_token']);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');
    const [render, setRender] = useState(0);

    const [comments, setComments] = useState([]);

    const incrState = () => {
        setRender(render + 1);
    }
    useEffect(() => {
        if (!token.auth_token) {
            history.push('/login');
        }
        console.log(localStorage.getItem('currentPost'));
        fetch(`${URL}/posts/${localStorage.getItem('currentPost')}`, {
            method: 'GET',
            headers: {
                'Authorization' : token.auth_token,
                'Accept': 'application/json',
            }})
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setTitle(res.title);
                setContent(res.content);
                setTopic(res.topic);
            },
            (error) => {
                console.log(error)
            });
            fetch(`${URL}/posts/${localStorage.getItem('currentPost')}/comments`, {
                method: 'GET',
                headers: {
                    'Authorization' : token.auth_token,
                    'Accept': 'application/json',
                }})
                .then((res) => res.json())
                .then((res) => {
                    setComments(res);
                },
                (error) => {
                    console.log(error)
                });
    }, [render])

    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
                <Grid item xs ={12} mg = {6} lg ={7} xl = {7} style = {{marginLeft: '1rem', marginTop: '1rem', height: '80vmin', width: '100%'}}>
                    <Grid container direction = 'column' spacing = {3}>
                        <Grid item>
                            <div className = {classes.topBar}>
                                <Grid container = 'row' spacing = {2}  justify="space-between">
                                    <Grid item><Typography variant = 'subtitle1'>{title} </Typography> </Grid>
                                    <Grid item onClick = {() => {history.push('/community')}}><Typography variant = 'subtitle1'>X Close</Typography></Grid> 
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className = {classes.post}>
                                <Post title = {title} content = {content} topic = {topic}></Post>
                            </div>
                        </Grid>
                        <Grid item>
                            <CommentCreate token = {token.auth_token} incrState = {incrState}></CommentCreate>
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Comments comments = {comments} token = {token.auth_token}></Comments>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommunityPost;