import React from 'react';
import { Hidden, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography, Divider, MenuItem, Collapse } from '@material-ui/core';
import { Menu as MenuList } from '@material-ui/core';
import { AccessTime, Menu, Add, DirectionsRun, MoreVert, PlaylistAddCheck, Report, EmojiPeople, ExpandLess, ExpandMore, RemoveCircleOutline, AddCircleOutline, ListAlt, GroupAdd, Book, Remove, PostAdd, ViewList } from '@material-ui/icons';
import useStyle from '../../Styling';
import { Link } from 'react-router-dom';

const MangerPage = () => {
    const classes = useStyle();
    const [mobileScreen, setMobileScreen] = React.useState(false);
    const [anchorE1, setAnchorE1] = React.useState(null);
    const [collapsed,setCollapsed ] = React.useState(false);
    const [collapsedTraining,setcollapsedTraining] = React.useState(false);
    const [collapsedRec,setCollapsedRec] = React.useState(false);
    const open = Boolean(anchorE1);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
    }
    const handleCollapseT = () => {
        setcollapsedTraining(!collapsedTraining);
    }
    const handleCollapseRec = () => {
        setCollapsedRec(!collapsedRec);
    }
    const hanleMobileScreen = () => {
        setMobileScreen(!mobileScreen);
    }
    const handleMenu = (event) => {
        setAnchorE1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE1(null);
    };
    const drawerList = (
        <div>
            <Divider />
            <List>
                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><AccessTime /></ListItemIcon>
                    <ListItemText>Clock In</ListItemText>
                </ListItem>

                <Link to='/reports' className={classes.links}>
                <ListItem className={classes.itemColor} onClick={handleCollapse} button>
                    <ListItemIcon><Report /></ListItemIcon>
                    <ListItemText>Generate Report</ListItemText>
                    {collapsed? <ExpandLess/> : <ExpandMore/>}
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
                </Link>


                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><DirectionsRun /></ListItemIcon>
                    <ListItemText>Performance Rating</ListItemText>
                </ListItem >
                <ListItem className={classes.itemColor} onClick={handleCollapseRec} button>
                    <ListItemIcon><GroupAdd /></ListItemIcon>
                    <ListItemText>Recruitment</ListItemText>
                    {collapsedRec? <ExpandLess/>:<ExpandMore/>}
                </ListItem>
                <Collapse in={collapsedRec} timeout='auto' unmountOnExit>
                    <List>
                        <ListItem className={classes.nestedList}>
                            <ListItemIcon><PostAdd/></ListItemIcon>
                            <ListItemText>Post New Job Offer</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList}>
                            <ListItemIcon><ViewList/></ListItemIcon>
                            <ListItemText>Job Applicants</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><PlaylistAddCheck /></ListItemIcon>
                    <ListItemText>Employee Attendances</ListItemText>
                </ListItem>
                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><EmojiPeople /></ListItemIcon>
                    <ListItemText>Leave Requests</ListItemText>
                </ListItem>
                <ListItem className={classes.itemColor} onClick={handleCollapseT} button>
                    <ListItemIcon><Book/></ListItemIcon>
                    <ListItemText>Training</ListItemText>
                    {collapsedTraining? <ExpandLess/>:<ExpandMore/>}
                </ListItem>
                <Collapse in={collapsedTraining} timeout='auto' unmountOnExit>
                    <List>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon><Add/></ListItemIcon>
                            <ListItemText>Add Training Course</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon><Remove/></ListItemIcon>
                            <ListItemText>Remove training Course(s)</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
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
    return (
        <div>
            <AppBar className={classes.appBar} display='flex'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        arial-label="Open Drawer"
                        edge="start"
                        onClick={hanleMobileScreen}
                        className={classes.menuToggle}
                    >
                        <Menu className={classes.iconColor} />
                    </IconButton>
                    <IconButton
                        className={classes.more}
                        color="inherit"
                        aria-label="Options"
                        edge="end"
                        onClick={handleMenu}
                    >
                        <MoreVert className={classes.iconColor} />
                    </IconButton>
                    <MenuList
                        id="more-Menu"
                        anchorE1={anchorE1}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>LogOut</MenuItem>
                        <Link to="/ProfileUpdate" className={classes.links}>
                        <MenuItem>Update Account</MenuItem>
                        </Link>
                    </MenuList>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        open={mobileScreen}
                        onClose={hanleMobileScreen}
                        variant='temporary'
                        classes={{ paper: classes.drawerPaper }}
                    >
                        {drawerHeader}
                        {drawerList}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        open
                        variant='permanent'
                        classes={{ paper: classes.drawerPaper }}
                        display='flex'
                    >
                        {drawerHeader}
                        {drawerList}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}
export default MangerPage;