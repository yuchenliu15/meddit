import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import Image from '../assets/background.svg';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        maxWidth: '100vw',
        padding: '2rem 2rem 2rem 2rem',
        [theme.breakpoints.down('lg')]: {
        padding: '1rem 1rem 1rem 1rem'
        },
        backgroundImage: `url(${Image})`,
    },
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
    },
    topBar: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: '#9066FF',
        padding: '1rem 3rem',
        borderRadius: '4px',
        color: '#fff',
    }

}));

const NotFound = (props) => {
    const classes = useStyles();
    const history = useHistory();

    // const [token, setToken] = useCookies(['auth_token']);
    // useEffect(() => {
    //     if (!token.auth_token) {
    //         history.push('/login');
    //     }
    // }, [])

    return (
        <div className = {classes.container}>
            <Typography>
                Sorry, wrong URL. 404 Error!!!
            </Typography>
        </div>
    )
}

export default NotFound;