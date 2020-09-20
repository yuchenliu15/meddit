import React, {useEffect, useState} from 'react';
import CommunityItem from '../components/community/CommunityItem';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';
import PostCreate from '../components/community/PostCreate';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import Image from '../assets/background.svg';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '230vh',
        maxWidth: '100vw',
        padding: '2rem 2rem 2rem 2rem',
        [theme.breakpoints.down('lg')]: {
        padding: '1rem 1rem 1rem 1rem'
        },
        backgroundImage: `url(${Image})`,
    },
    greetingsContainer: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: '#9066FF',
        padding: '1rem 3rem',
        borderRadius: '4px',
        color: '#fff',
    },
    Divider: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    filter: {
        padding: '.2rem 1rem .2rem 1rem',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
    },
    activeFilter: {
        background: '#9066FF',
        padding: '.2rem 1rem .2rem 1rem',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
        color: '#fff',
    }
    
}));

const Community = (props) => {
    const classes = useStyles();
    const [token, setToken] = useCookies(['auth_token']);
    const history = useHistory();

    const [render, setRender] = useState(0);
    const [activeTopic, setActiveTopic] = useState('all');
    const [communityName, setCommunityName] = useState('');
    const [communityDescription, setCommunityDescription] = useState('');
    const [defaultSymptoms, setDefaultSymptoms] = useState([]);

    const [posts, setPosts] = useState();


    const incrState = () => {
        setRender(render + 1);
    };




    useEffect(() => {
        if (!token.auth_token) {
            history.push('/login');
        }
        console.log(posts);
        fetch('http://localhost:3000/communities/-MHbwyz2x97ZP_cUnnSZ', {
            method: 'GET',
            headers: {
                'Authorization' : token.auth_token,
                'Accept' : 'application/json',

            }})
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setCommunityName(res.name);
                setCommunityDescription(res.description);
                setDefaultSymptoms(res.defaultSymptoms);

            },
            (error) => {
                console.log(error);
            });
        fetch('http://localhost:3000/communities/-MHbwyz2x97ZP_cUnnSZ/posts', {
            method: 'GET',
            headers: {
                'Authorization' : token.auth_token,
                'Accept' : 'application/json',
            }})
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setPosts(res);
            },
            (error) => {
                console.log(error);
            });
        
    }, [render]);


    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
            <Grid item xs={12} md={6} lg={7} xl={7} style={{marginLeft: '1rem', marginTop: '1rem', height: '80vmin'}}>
                <Grid container direction = 'column' spacing = {3}>
                    <Grid item>
                        <div className = {classes.greetingsContainer}>
                            <Typography variant ='h6'><Box fontWeight = 'bold'>{communityName}</Box></Typography>
                            <Typography variant = 'subtitle2' style = {{opacity: '.7'}}>Description: This is a Community for people with {communityName} </Typography>
                        </div>
                    </Grid>
                    <Grid item>
                        <Grid item><CommunityItem title = {`${communityName} information & recourses`} community = "auto generated" content = {communityDescription} symptoms = {defaultSymptoms} active = {true}></CommunityItem></Grid>
                    </Grid> 
                    <Grid item>
                        <PostCreate user = {localStorage.getItem('user')} token = {token.auth_token} incrState = {incrState}></PostCreate>
                    </Grid>
                    <Grid item>
                        <Grid container direction = 'row' spacing = {2} alignContent = 'stretch' alignItems = 'stretch' >
                            <Grid item><Typography>Topics: </Typography></Grid> 
                            <Grid item><Typography className = {(activeTopic === 'all') ? classes.activeFilter : classes.filter}>All</Typography></Grid>
                            <Grid item><Typography className = {classes.filter}>Discussion</Typography></Grid>
                            <Grid item><Typography className = {classes.filter}>Reccomedations</Typography></Grid>
                            <Grid item><Typography className = {classes.filter}>Doctors</Typography></Grid>
                        </Grid>
                    </Grid> 
                    {(posts != null) ? posts.slice().reverse().map((select, index) => {
                        if(select != null){
                            return (
                                <Grid item key={select.timestamp}><CommunityItem key={select.timestamp} id = {select.id} title = {select.title} community = {`/${communityName}`} content = {select.content} ></CommunityItem> </Grid>
                            )
                        }
                    }): ' '}
                    
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Community;