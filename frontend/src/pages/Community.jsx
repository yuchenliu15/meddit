import React, {useState, useEffect} from 'react';
import CommunityItem from '../components/CommunityItem';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';
import PostCreate from '../components/PostCreate';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '230vh',
        maxWidth: '100vw',
        padding: '2rem 2rem 2rem 2rem',
        [theme.breakpoints.down('lg')]: {
        padding: '1rem 1rem 1rem 1rem'
        },
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
    }
    
  }));

const Community = (props) => {
    const classes = useStyles();
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
                        <PostCreate></PostCreate>
                    </Grid>
                    <Divider className = {classes.Divider} />
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