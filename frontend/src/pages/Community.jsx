import React, {useState, useEffect} from 'react';
import CommunityItem from '../components/CommunityItem';
import {Grid, Typography, makeStyles, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => {

})

const Community = (props) => {
    const classes = useStyles();
    return (
        <Typography>This is a community</Typography>
    )
}

export default Community;