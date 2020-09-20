import React, {useState, useEffect} from 'react';
import {Typography, Box, makeStyles, CardContent, Card, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    comment: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        width: '100%',
        marginBottom: '0.5em'
    }

}));

const Comment = (props) => {
    const classes = useStyles();

    useEffect(() => {
        console.log(props.id);
        if(props.id != null){
            fetch(`http://localhost:3000/posts/${localStorage.getItem('currentPost')}/comments/${props.id}`, {
                method: 'GET',
                headers: {
                    'Authorization' : props.token,
                    'Accept': 'application/json',
                }})
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                });
        }

    })
    return (
        <Card className = {classes.comment}>
            <CardContent>
                <Grid container direction = "row" justify = 'space-between'>
                    <Grid item>
                        <Grid container direction = "row" spacing = {2}>
                            <Grid item>
                                <Typography variant = 'subtitle2'><Box fontWeight = 'bold'>Anonomous Rabbit</Box></Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant = 'subtitle2'>10 minutes ago</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction = "row" justify = 'space-between'>
                    <Grid item>
                        <Grid container direction = "row" spacing = {2}>
                            <Grid item>
                                <Typography variant = 'subtitle1'>Nice project! I was wondering what is the back-end and database usage. Cant this be done with react and direct calls to the spotify api?.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card> 
    )
}

export default Comment;