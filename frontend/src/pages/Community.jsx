import React, {useState, useEffect} from 'react';
import CommunityItem from '../components/community/CommunityItem';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';
import PostCreate from '../components/community/PostCreate';

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

    useEffect(() => {
        fetch('http://localhost:3000/communities/-MHbwyz2x97ZP_cUnnSZ/posts', {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',

            }})
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            },
            (error) => {
                console.log(error);
            });
    })
    const classes = useStyles();
    const [activeTopic, setActiveTopic] = useState('all');
    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
            <Grid item xs={12} md={6} lg={7} xl={7} style={{marginLeft: '1rem', marginTop: '1rem', height: '80vmin'}}>
                <Grid container direction = 'column' spacing = {3}>
                    <Grid item>
                        <div className = {classes.greetingsContainer}>
                            <Typography variant ='h6'><Box fontWeight = 'bold'>Flu Discussion</Box></Typography>
                            <Typography variant = 'subtitle2' style = {{opacity: '.7'}}>Description: This is a community for you to talk about the flu</Typography>
                        </div>
                    </Grid>
                    <Grid item>
                        <Grid item><CommunityItem title = "Flu Information and Stuff" community = "auto generated" content = "Basic information about the flu" active = {true}></CommunityItem></Grid>
                    </Grid> 
                    <Grid item>
                        <PostCreate></PostCreate>
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
                    <Grid item><CommunityItem title = "this is an example of a post" community = "/flu" content = "sajhdjkahdskjhadsjkhasdkjasdhkjashd adhasdjhasdkhasd adsashdjasdh asda ahsdjh sdja dahsdjahsd jasd ahj"></CommunityItem> </Grid>
                    <Grid item><CommunityItem title = "this is an example of a post" community = "/flu" content = "sajhdjkahdskjhadsjkhasdkjasdhkjashd adhasdjhasdkhasd adsashdjasdh asda ahsdjh sdja dahsdjahsd jasd ahj"></CommunityItem> </Grid>
                    <Grid item><CommunityItem title = "this is an example of a post" community = "/flu" content = "sajhdjkahdskjhadsjkhasdkjasdhkjashd adhasdjhasdkhasd adsashdjasdh asda ahsdjh sdja dahsdjahsd jasd ahj"></CommunityItem> </Grid>
                    <Grid item><CommunityItem title = "this is an example of a post" community = "/flu" content = "sajhdjkahdskjhadsjkhasdkjasdhkjashd adhasdjhasdkhasd adsashdjasdh asda ahsdjh sdja dahsdjahsd jasd ahj"></CommunityItem> </Grid>
                    <Grid item><CommunityItem title = "this is an example of a post" community = "/flu" content = "sajhdjkahdskjhadsjkhasdkjasdhkjashd adhasdjhasdkhasd adsashdjasdh asda ahsdjh sdja dahsdjahsd jasd ahj"></CommunityItem> </Grid>

                    
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Community;