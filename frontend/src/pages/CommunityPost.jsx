import React, {useState, useEffect} from 'react';
import {Grid, Fade, Button, makeStyles, Typography, Box, CardContent, Card} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    }
}));

const CommunityPost = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {0} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
                <Grid xs={12} md={6} lg={7} xl={7} style={{marginLeft: '1rem', marginTop: '1rem', height: '80vmin'}}>
                    <Grid container direction = 'column' spacing = {3}>
                        <Grid item>
                            <Card className = {classes.postCard}>
                                <CardContent>
                                    <Grid container direction = 'row' justify = 'space-between'>
                                        <Grid item>
                                            <Grid container direction = 'row' spacing = {2}>
                                                <Grid item><Typography className = {classes.postTitle}><Box fontWeight = 'bold'>This is a post example</Box></Typography></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction = 'row' spacing = {2}>
                                                <Grid item><Typography variant = 'subtitle2' className = {classes.cardLabel}></Typography></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction = 'row' spacing = {2}>
                                                <Grid item><Typography variant = 'subtitle2' className = {classes.cardLabel}>Description: </Typography> </Grid>
                                                <Grid item><Typography variant = 'subtitle2' className = {classes.content}>{props.content}</Typography></Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default CommunityPost;