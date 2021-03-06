import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';

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
    mainPhoto: {
        width: '800px',
        height: '600px',
        paddingTop: '1.25%'
    },
    quote: {
        fontWeight: 600,
        fontSize: '40px'
    },
    des: {
        fontSize: '20px'
    }
}));

const WhiteTypography = withStyles({
	root: {
	  color: "#ffffff",
	}
  })(Typography);

export default function Quote() {
    const classes = useStyles();

    const [data, setData] = useState({ posts: [] });

    useEffect(() => {
        var url = "http://localhost:8000/api/quote"
        axiosInstance.get(url).then((res) => {
            setData({ posts: res.data });
            console.log(res.data);
        });
    }, [setData]);

    return (
        <Card sx={{ maxWidth: 50 }} style={{backgroundColor: '#006600'}}>
            <CardContent>
            <WhiteTypography variant="h5" component="div" className={classes.quote}>
                    {data.posts.quote}
                </WhiteTypography>
                <br/> 
                <WhiteTypography variant="h5" component="div" className={classes.des}>
                    {data.posts.description}
                </WhiteTypography>
            </CardContent>
        </Card>
    );
}