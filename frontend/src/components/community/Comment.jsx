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
    return (
        <Card className = {classes.comment}>
            <CardContent>
                <Grid container direction = "row" justify = 'space-between'>
                    <Grid item>
                        <Grid container direction = "row" spacing = {2}>
                            <Grid item>
                                <Typography variant = 'subtitle2'><Box fontWeight = 'bold'>{props.username}</Box></Typography>
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
                                <Typography variant = 'subtitle1'>{props.content}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card> 
    )
}

export default Comment;