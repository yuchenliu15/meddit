import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));


const CommentSection = (props) => {
    const classes = useStyles();
    
    return (
        <Grid container direction = 'column'>
            {props.comments.map((select, index) => {
                return (
                    <Grid item><Comment token = {props.token} id = {select}></Comment></Grid>
                )
            })}
        </Grid>

    )
}

export default CommentSection;