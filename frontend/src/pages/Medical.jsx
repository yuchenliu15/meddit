import React, {useState, useEffect} from 'react';
import SymptomLog from '../components/medical/SymptomLog';
import {Grid,Typography, makeStyles, Box, Divider} from '@material-ui/core';

import Image from '../assets/background.svg';

const useStyles = makeStyles((theme) => ({

}));

const Medical = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' spacing = {2} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
                <Grid item xs = {12} md = {6} lg = {7} xl = {7} style = {{marginLeft: '1ren', marginTop: '1rem', height: '80vmin'}}>
                    <Grid container direction = 'column' spacing = {3}>
                        <Grid item>
                            <div className = {classes.greetingsContainer}>
                                <Typography variant = 'h5'><Box fontWeight = 'bold'>Welcome to Meddit, Name </Box></Typography>
                                <Typography variant = 'subtitle2' style = {{opacity: '.7'}}>Please enter how you are feeling so we can add you to a community of people who feel the same way</Typography>
                            </div>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Medical;