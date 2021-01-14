import React from 'react';
import {Hidden, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography, Divider, MenuItem, Collapse} from '@material-ui/core';
import {Menu as MenuList} from '@material-ui/core';
import {AccessTime,Menu, MoreVert, Report, EmojiPeople, Stars, ExpandLess, ExpandMore}from '@material-ui/icons';
import useStyle from '../../Styling';
const EmployeePage = () =>
{
    const classes = useStyle();
    const [mobileScreen, setMobileScreen] = React.useState(false);
    const [collapsed,setCollapsed ] = React.useState(false);
    const [anchorE1,setAnchorE1] = React.useState(null);
    const open = Boolean(anchorE1);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
    }
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
                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><AccessTime/></ListItemIcon>
                    <ListItemText>Clock In</ListItemText>
                </ListItem>
                <ListItem className={classes.itemColor} onClick={handleCollapse} button>
                    <ListItemIcon><Report/></ListItemIcon>
                    <ListItemText>Generate Report</ListItemText>
                    {collapsed? <ExpandLess/>:<ExpandMore/>}
                </ListItem>
                <Collapse in={collapsed} timeout='auto' unmountOnExit>
                    <List>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon><RemoveCircleOutline/></ListItemIcon>
                            <ListItemText>Termination Report</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon><AddCircleOutline/></ListItemIcon>
                            <ListItemText>New Hires Report</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon><AddCircleOutline/></ListItemIcon>
                            <ListItemText>New Managers Report</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon><EmojiPeople/></ListItemIcon>
                            <ListItemText>On Leave Report</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>


                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><Stars/></ListItemIcon>
                    <ListItemText>Your Performance Rating</ListItemText>
                </ListItem >
                <Link to='/LeaveForm' className={classes.links}>
                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><EmojiPeople/></ListItemIcon>
                    <ListItemText>Request Leave</ListItemText>
                </ListItem>
                </Link>
            </List>

        </div>
    );
    const drawerHeader = (
        <div>
            <Box display='flex' justifyContent='center' p={2}>
                <Typography variant='h6' className={classes.itemHeader}>HR Management System</Typography>
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
                            <Link to='/ProfileUpdate' className={classes.links}>
                            <MenuItem>Manage Account</MenuItem>
                            </Link>
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
export default EmployeePage;