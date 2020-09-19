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
        <Typography>Community Post</Typography>
    )
}

export default CommunityPost;