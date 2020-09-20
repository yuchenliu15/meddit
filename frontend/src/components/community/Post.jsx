import React, {useState, useEffect} from 'react';
import {Grid, Fade, Button, makeStyles, Typography, Box, CardContent, Card} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    postCard: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        width: '100%',
        marginBottom: '0.5em',
    },
    active: {
        border: '3px solid #9066FF',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        width: '100%',
        marginBottom: '0.5em',
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
    topic: {
        color: '#fff',
        background: '#9066FF',
        padding: '2px 5px 2px 5px',
        borderRadius: '5px',
    }

}));


const Post = (props) => {
    const classes = useStyles();
    return (
        <Card className = {(props.active) ? classes.active:classes.postCard}>
            <CardContent>
                <Grid container direction = "row" justify = 'space-between'>
                    <Grid item>
                        <Grid container direction = "row" spacing = {2}>
                            <Grid item>
                                <Typography variant = 'subtitle2'>posted by Ananonymous 8 hours ago.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction = "row" justify = 'space-between' spacing = {3}>
                    <Grid item>
                        <Grid container direction = 'row' spacing = {2}>
                            <Grid item><Typography  variant = 'h4' className = {classes.postTitle}><Box fontWeight = 'bold'>{props.title}</Box></Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.cardLabel}>Topics:</Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.topic}>{props.topic}</Typography></Grid>
                </Grid>
                {/* <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2'className = {classes.cardLabel}>{(props.active) ? 'Common Symptoms with Flu':'Symptoms:'} </Typography> </Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>Cough</Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>Fever</Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>Nausea</Typography></Grid>
                    
                </Grid> */}
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle1' className = {classes.content}>{props.content}</Typography></Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default Post;