import React, {useState, useEffect} from 'react';
import {Box, Card, Typography, Grid, CardContent, makeStyles} from '@material-ui/core';

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
    }
}));

const CommunityItem = (props) => {
    const classes = useStyles();


    return (
        <Card className = {(props.active) ? classes.active:classes.postCard}>
            <CardContent>
                <Grid container direction = "row" justify = 'space-between'>
                    <Grid item>
                        <Grid container direction = 'row' spacing = {2}>
                            <Grid item><Typography className = {classes.postTitle}><Box fontWeight = 'bold'>{props.title}</Box></Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.cardLabel}>{props.community}</Typography></Grid>
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.cardLabel}>Description: </Typography> </Grid>
                    <Grid item><Typography variant = 'subtitle2' className = {classes.content}>{props.content}</Typography></Grid>
                </Grid>
                <Grid container direction = "row" spacing = {2}>
                    <Grid item><Typography variant = 'subtitle2'className = {classes.cardLabel}>{(props.symptoms != null) ? 'Common Symptoms':''} </Typography> </Grid>
                    {(props.symptoms != null) ?
                        props.symptoms.map((select , index ) => {
                        return (
                            <Grid item><Typography variant = 'subtitle2' className = {classes.symptoms}>{select.name}</Typography></Grid>
                        )
                    }) : ' '}
                    
                </Grid>                
            </CardContent>
        </Card>

    )
}

export default CommunityItem;