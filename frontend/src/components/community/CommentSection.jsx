import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));


const CommentSection = (props) => {
    const classes = useStyles();
    
    return (
        <Grid container direction = 'column'>
            <Grid item><Comment></Comment></Grid>
            <Grid item><Comment></Comment></Grid>
            <Grid item><Comment></Comment></Grid>
            <Grid item><Comment></Comment></Grid>
            <Grid item><Comment></Comment></Grid>
            <Grid item><Comment></Comment></Grid>
        </Grid>

    )
}

export default CommentSection;