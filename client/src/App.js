import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';

import memories from './images/memories.jpg';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container>
            <AppBar className={classes.appBar} position="static" colour="inherit">
                <Typography className={classes.heading} variant="h2" align="center">TimeCapsule</Typography>
                <img className={classes.image} src={memories} alt="timeCapsule" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs ={12} sm ={7}>
                            <Posts setCurrentId={setCurrentId}></Posts>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;