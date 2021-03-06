import React, { useState, useContext } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import AuthContext from './AuthContext'


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: '#006600'
    },
    logo: {
        width: '300px'
    },
    fbLogo: {
        width: '45px',
        height: '45px',
        //position: absolute,
        //top: 4%,
        //left: 69.5%,
    },
    twLogo: {
        width: '45px',
        height: '45px',
        //position: absolute,
        //top: 4%,
        //left: 74.3%,
    },
    insLogo: {
        width: '45px',
        height: '45px',
        //position: absolute,
        // top: 4%,
        // left: 79%,
    }
}));

export default function RegisteredUser() {
    let { user, logoutUser } = useContext(AuthContext)
    const classes = useStyles();

    return (
        <React.Fragment>
            {user && <p
                href="/login"
                color="white"
                variant="outlined"
                className={classes.link}
                component={NavLink}
                onClick={logoutUser}
            >
                WYLOGUJ SIĘ
            </p>
            }
        </React.Fragment>
    )
}