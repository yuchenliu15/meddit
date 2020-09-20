import React, {useState} from 'react';
import {Button, Card, CircularProgress, Grid, CardContent, makeStyles, Divider, Typography, Checkbox} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        height: '100%',
        backgroundColor: '#FFF',
    },
    textInput: {
        color: '#AEAEAE',
    },
    submitBtn: {
        backgroundColor: '#47C594',
        color: '#fff',
        textTransform: 'none',
    },
    title: {
        color: '#334D6E',
        fontWeight: 'bold',
        fontSize: '1rem',
        margin: 0,
        paddingBottom: '0',
    },
    labelButton: {
        textTransform: 'none',
        justifyContent: 'start',
    },
    rootButton: {
        height: '2.5rem',
        textAlign: 'left',
        paddingLeft: '0',
        borderRadius: 6,
        borderWidth: 1.25,
        backgroundColor: '#EDF2FF',
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        'borderRadius': 3,
        'width': 14,
        'height': 14,
        'borderStyle': 'solid',
        'borderColor': 'rgba(0, 0, 0, 0.2)',
        'borderWidth': '1px',
        'boxShadow': 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        'backgroundColor': '#f5f8fa',
        'backgroundImage': 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        'backgroundColor': '#47C594',
        'backgroundImage': 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 14,
            height: 14,
            backgroundImage:
            'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3E%3Cpath' +
            ' fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 ' +
            '1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z\' fill=\'%23fff\'/%3E%3C/svg%3E")',
            content: '""',
        },
    },

}))

const SymptomLog = (props) => {
    const classes = useStyles();
    const { onChange, onClick } = props;
    return (
        <Card className = {classes.container}>
            <CardContent className = {classes.content}>
                <InputBase
                    className = {classes.content}
                    onChange={onChange}
                    multiline
                    rows = {2}
                    placeholder = "I have a fever, and a cough. I have also been feeling nauseous lately"
                    fullWidth
                    margin = 'none'
                />
                <Divider />
                <Grid container direction = 'row'>
                    <Grid item><Typography style = {{paddingTop: '10px'}}>Symptoms Recognized: </Typography></Grid>
                </Grid>
                <Grid container justify = 'flex-end' style = {{paddingTop: '10px'}}>
                    <Grid item>
                        <Button onClick={onClick} size = 'small' className = {classes.submitBtn}>Save</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SymptomLog;