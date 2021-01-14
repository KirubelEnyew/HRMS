import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from '../../Styling';
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='xl' className={classes.homeContainerHead2}>
                <Typography component='div' className={classes.overlay2} />
                <Container className={classes.homeTitleHolder}>
                    <Typography variant='h3'>Welcome</Typography>
                    <Typography variant='h2'>Human Resource Management System</Typography>
                </Container>
            </Container>
        </div>
    );

}

export default Home;