import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axiosInstance from '../axios';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    postTitle: {
        fontSize: '16px',
        textAlign: 'left',
    },
    postText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
    photo: {
        width: '30px',
        height: '30px'
    }
}));

function Sections() {

    const [appState, setAppState] = useState({
        sections: [],
    });

    useEffect(() => {
        axiosInstance.get("http://localhost:8000/api/section").then((res) => {
            const gotSections = res.data;
            setAppState({ sections: gotSections });
            console.log(res.data);
        });
    }, [setAppState]);

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                        {appState.sections.map((section) => {
                            var url = 'http://localhost:8000' + section.icon
                            return (
                                // Enterprise card is full width at sm breakpoint
                                <Link
                                    color="textPrimary"
                                    href={'http://localhost:3000/sections/' + section.name}
                                    className={classes.link}
                                >
                                <span>
                                    <Button variant="contained">
                                        <img className={classes.photo} src={url} alt="url" /> <br /> {section.name}
                                    </Button>
                                    <br/>
                                </span>
                                                                </Link>
                            );
                        })}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Sections;