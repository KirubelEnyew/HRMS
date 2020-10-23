import React from 'react';
import {Hidden, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography, Divider, MenuItem, Collapse} from '@material-ui/core';
import {Menu as MenuList} from '@material-ui/core';
import {Menu, MoreVert, Publish, Visibility}from '@material-ui/icons';
import useStyle from '../../Styling';
const ApplicantsPage =() => {
    const classes = useStyle();
    const [mobileScreen, setMobileScreen] = React.useState(false);
    const [anchorE1,setAnchorE1] = React.useState(null);
    const open = Boolean(anchorE1);
    const hanleMobileScreen = ()=>{
        setMobileScreen(!mobileScreen);
    }
    const handleMenu = (event) => {
        setAnchorE1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE1(null);
    };
    const drawerList=(
        <div>
            <Divider/>
            <List>
                <ListItem className={classes.itemColor}>
                    <ListItemIcon><Publish/></ListItemIcon>
                    <ListItemText>Submitt a CV form</ListItemText>
                </ListItem>
                <ListItem className={classes.itemColor}>
                    <ListItemIcon><Visibility/></ListItemIcon>
                    <ListItemText>View Job Offers</ListItemText>
                </ListItem>
            </List>

        </div>
    );
    const drawerHeader = (
        <div>
            <Box display='flex' justifyContent='center' p={2}>
                <Typography variant='h6' className={classes.itemHeder}>HR Management System</Typography>
            </Box>
        </div>
    )
    return(
        <div className={classes.toolbar}>
            <AppBar className={classes.appBar} display = 'flex'>
                <Toolbar>
                    <IconButton
                    color ="inherit"
                    arial-label ="Open Drawer"
                    edge = "start"
                    onClick = {hanleMobileScreen}
                    className = {classes.menuToggle}
                    >
                        <Menu className={classes.iconColor}/>
                    </IconButton>
                    <IconButton
                    color = "inherit"
                    aria-label = "Options"
                    edge = "end"
                    onClick = {handleMenu}
                    >
                        <MoreVert className={classes.iconColor}/>
                    </IconButton>
                    <MenuList
                        id="more-Menu"
                        anchorE1={anchorE1}
                        anchorOrigin={{
                            vertical : 'top',
                            horizontal : 'right'
                        }}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        >
                            <MenuItem>Log Out</MenuItem>
                            <MenuItem>Manage Account</MenuItem>
                        </MenuList>
                </Toolbar>
            </AppBar>
            <nav className = {classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        open = {mobileScreen}
                        onClose = {hanleMobileScreen}
                        variant = 'temporary'
                        classes = {{paper: classes.drawerPaper}}
                    >
                        {drawerHeader}
                        {drawerList}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        open
                        variant = 'permanent'
                        classes = {{paper: classes.drawerPaper}}
                        display = 'flex'
                    >
                        {drawerHeader}
                        {drawerList}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default ApplicantsPage ;