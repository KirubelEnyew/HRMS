import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Container, Grid, Box, Hidden, Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import useStyle from './Styling.js';

const Next = ()=>{
    const [mobileScreen, setScreen] = React.useState(false);
    const classes = useStyle();
    const handleScreen = ()=>{
     setScreen(!mobileScreen);   
    }

    const drawer = (
        <List>
            <Link to='/dash'>
            <ListItem>
                <ListItemText>Dashboards</ListItemText>
            </ListItem>
            </Link>
            <Link to='/abt'>
            <ListItem>
                <ListItemText>About</ListItemText>
            </ListItem>
            </Link>
        </List>
    );

    return(
        <div className={classes.root}>
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Menu onClick={handleScreen} className={classes.menuButton}/>
                <Box display='flex' flexDirection='row' flexGrow={1} justifyContent='center'>
                <Typography variant='body2'>Home</Typography>
                <Box mx={2}/>
                <Typography variant='body2'>Dash</Typography>
                <Box mx={2}/>
                <Typography variant='body2'>About</Typography>
                </Box>
            </Toolbar>
        </AppBar>  
        <nav className={classes.drawer}>
            <Hidden smUp>
                <Drawer
                    variant='temporary'
                    open={mobileScreen}
                    onClose={handleScreen}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown>
            <Drawer
                variant='permanent'
                open
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                {drawer}
            </Drawer>    
            </Hidden>  
        </nav>
        {/* <Container>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12} style={{backgroundColor:'red'}}><p>Hello</p></Grid>
                <Grid item  md={4} xs={12} style={{backgroundColor:'yellow'}}><p>Hello1</p></Grid>
                <Grid item  md={4} xs={12} style={{backgroundColor:'green'}}><p>Hello1</p></Grid>
            </Grid>
        </Container> */}

        </div>
    );
}

export default Next;
