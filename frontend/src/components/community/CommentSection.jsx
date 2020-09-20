import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import {Grid, Typography, makeStyles, Box, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));


const CommentSection = (props) => {
    const classes = useStyles();
    console.log(props.comments);
    
    return (
        <Grid container direction = 'column'>
            {(props.comments != undefined) ? props.comments.map((select, index) => {
                return (
                    <Grid item><Comment token = {props.token} id = {select.id} username = {select.username} content = {select.content}></Comment></Grid>
                )
            }): ''}
        </Grid>

    )
}

export default CommentSection;