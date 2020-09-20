import React, {useEffect, useState} from 'react';
import CommunityItem from '../components/community/CommunityItem';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';
import PostCreate from '../components/community/PostCreate';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import Image from '../assets/background.svg';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import { URL } from "../constants.js";

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
    },
    textInput: {
        color: '#AEAEAE',
        width: '500px'
    },
    topBar: {
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        // background: '#DADFE6',
        // padding: '1rem 3rem',
        // borderRadius: '4px',
        color: '#000000',
    }
    
}));

const Community = (props) => {
    const classes = useStyles();
    const [token, setToken] = useCookies(['auth_token']);
    const history = useHistory();

    const [render, setRender] = useState(0);
    const [activeTopic, setActiveTopic] = useState('all');

    const [communities, setCommunities] = useState([]);

    const [communityNames, setCommunityNames] = useState([]);

    const [selectedCommunity, setCommunity] = useState(null);

    const [newSelectedCommunity, setNewSelectedCommunity] = useState('');

    const [communityName, setCommunityName] = useState('');
    const [communityDescription, setCommunityDescription] = useState('');
    const [defaultSymptoms, setDefaultSymptoms] = useState([]);

    const [posts, setPosts] = useState();


    const incrState = () => {
        setCommunityNames([]);
        setCommunities([]);
        setRender(render + 1);

    };

    const handleCommunityChange = (event) => {
        localStorage.setItem('selectedCommunity', event.target.value);
        setCommunity(event.target.value);
        setCommunityNames([]);
        setCommunities([]);
        setRender(render + 1);
    }




    useEffect(() => {
        if (!token.auth_token) {
            history.push('/login');
        }
        fetch(`${URL}/users/${localStorage.getItem('user')}`, {
            method: 'GET',
            headers: {
                'Authorization' : token.auth_token,
                'Accept' : 'application/json',

            }})
            .then((res) => res.json())
            .then((res) => {
                if(selectedCommunity == null){
                    localStorage.setItem('selectedCommunity', res.communities[0]);
                }
                
                var idx; 
                for(idx = 0; idx < res.communities.length; idx++){
                    communities.push(res.communities[idx]);
                    fetch(`${URL}/communities/${communities[idx]}`, {
                        method: 'GET',
                        headers: {
                            'Authorization' : token.auth_token,
                            'Accept' : 'application/json',
            
                        }})
                        .then((res) => res.json())
                        .then((res) => {
                            communityNames.push(res.name);
                        },
                        (error) => {
                            console.log(error);
                        });
                }
            },
            (error) => {
                console.log(error);
            });
        fetch(`${URL}/communities/${localStorage.getItem('selectedCommunity')}`, {
            method: 'GET',
            headers: {
                'Authorization' : token.auth_token,
                'Accept' : 'application/json',

            }})
            .then((res) => res.json())
            .then((res) => {
                setCommunityName(res.name);
                setCommunityDescription(res.description);
                setDefaultSymptoms(res.defaultSymptoms);

            },
            (error) => {
                console.log(error);
            });
        fetch(`${URL}/communities/${localStorage.getItem('selectedCommunity')}/posts`, {
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
        
    }, [render, selectedCommunity]);


    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
            <Grid item xs={12} md={6} lg={7} xl={7} style={{marginLeft: '1rem', marginTop: '1rem', height: '80vmin'}}>
                <Grid container direction = 'column' spacing = {3}>
                    <Grid item>
                        <div className = {classes.topBar}>
                            <Grid container = 'row' spacing = {2}  justify="space-between">
                                <Grid item>
                                    <FormControl className={classes.textInput}>
                                        <InputLabel id="demo-simple-select-label">Your Commuities</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={newSelectedCommunity}
                                        onChange={handleCommunityChange}
                                        >
                                        {communities.map((select, index) => {
                                            return (
                                                <MenuItem value = {select}>{communityNames[index]}</MenuItem>
                                            )
                                        })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {/* <Grid item onClick = {() => {history.push('/community')}}><Typography variant = 'subtitle1'>X Close</Typography></Grid>  */}
                            </Grid>
                        </div>

                    </Grid>
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
                        <PostCreate user = {localStorage.getItem('user')} community_id = {selectedCommunity} token = {token.auth_token} incrState = {incrState}></PostCreate>
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