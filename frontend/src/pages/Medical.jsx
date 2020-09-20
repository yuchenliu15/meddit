import React, {useState, useEffect} from 'react';
import SymptomLog from '../components/medical/SymptomLog';
import {Grid,Typography, makeStyles, Box, Divider, GridList, Card, CardContent} from '@material-ui/core';
import { useCookies } from 'react-cookie';
import axios from 'axios'

import Image from '../assets/background.svg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '230vh',
        maxWidth: '100vw',
        padding: '2rem 2rem 2rem 2rem',
        [theme.breakpoints.down('lg')]: {
        padding: '1rem 1rem 1rem 1rem'
        },
        backgroundImage: `url(${Image})`,
    },
    greetingsContainer: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: '#9066FF',
        padding: '1rem 3rem',
        borderRadius: '4px',
        color: '#fff',
    },
}));

const Medical = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const {
        user
    } = props;
    const [text, setText] = useState('');
    const [token, setToken] = useCookies(['auth_token']);
    const [isLoading, setIsLoading] = useState(false);
    const [illness, setIllness] = useState([])
    useEffect(() => {
        if (!token.auth_token) {
            history.push('/login');
        }
    }, [])

    const onChange = (e) => {        
        setText(e.target.value)
    }

    const onClick = async (e) => {
        setIsLoading(true);
        const fetchResult = await fetchData(text);
        setIsLoading(false);
        setIllness(fetchResult.conditions)
    }

    const fetchData = async (text) => {
        try {
            const result = await axios.post("https://api.infermedica.com/v2/parse", 
              {
                text
              },
              {
                headers: {
                  'App-Id': process.env.REACT_APP_ZAPI_APP_ID,
                  'App-Key': process.env.REACT_APP_API_APP_KEY,
                  'Content-Type': 'application/json'
                }
              })
        
            const parseResult = result.data;
            if (parseResult.mentions) {
            }
            const evidence = parseResult.mentions.map(item => {
              return {
                id: item.id,
                choice_id: item.choice_id,
              }
            })
        
            const diagnosisResult = await axios.post("https://api.infermedica.com/v2/diagnosis", 
              {
                sex: 'female',
                age: 25,
                evidence
              },
              {
                headers: {
                  'App-Id': process.env.REACT_APP_ZAPI_APP_ID,
                  'App-Key': process.env.REACT_APP_API_APP_KEY,
                  'Content-Type': 'application/json'
                }
              })
            return diagnosisResult.data
          } catch (e){
            return 
          }
    }

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
                        <Grid item>
                            <SymptomLog onChange={onChange} onClick={onClick}
                                isLoading={isLoading} illness={illness}
                            ></SymptomLog>
                        </Grid>
                        <Grid item>
                            <Typography variant = 'h6'><Box fontWeight = 'bold'>Some Communities You might want to Join</Box></Typography>
                        </Grid>
                        <Grid item>
                            <GridList cols = {3} spacing = {1} cellHeight = 'auto'>

                            </GridList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Medical;

