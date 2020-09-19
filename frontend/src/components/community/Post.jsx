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
    const [content, setContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat est ut augue ultricies mollis. Maecenas magna orci, euismod auctor feugiat quis, gravida id ex. Vestibulum congue neque ac leo feugiat mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis venenatis massa vitae luctus. Nam vel egestas arcu, non dignissim libero. Vivamus congue auctor tortor, eget pulvinar est laoreet ut. Nulla sed tellus urna. Sed lacinia tincidunt iaculis. Duis pellentesque enim nec viverra lacinia.');
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
                            <Grid item><Typography  variant = 'h4' className = {classes.postTitle}><Box fontWeight = 'bold'>What should I do if i have the flu?</Box></Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.cardLabel}>Topics:</Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.topic}>Discussion </Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.topic}>Reccomendation </Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.topic}>Resources </Typography></Grid>
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2'className = {classes.cardLabel}>{(props.active) ? 'Common Symptoms with Flu':'Symptoms:'} </Typography> </Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>Cough</Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>Fever</Typography></Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>Nausea</Typography></Grid>
                    
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle1' className = {classes.content}>{content}</Typography></Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default Post;