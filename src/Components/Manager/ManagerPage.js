import React, { useEffect } from 'react';
import { Hidden, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography, Divider, MenuItem, Collapse, Tooltip } from '@material-ui/core';
import { AccessTime, Menu, Add, DirectionsRun, PlaylistAddCheck, Report, EmojiPeople, ExpandLess, ExpandMore, RemoveCircleOutline, AddCircleOutline, GroupAdd, Book, Remove, PostAdd, ViewList, RemoveCircle, Publish, Visibility, ExitToApp, AccountCircle, Stars, DeveloperBoard, StarRate } from '@material-ui/icons';
import useStyle from '../../Styling';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const MangerPage = (props) => {
    const classes = useStyle();
    const [mobileScreen, setMobileScreen] = React.useState(false);
    const [collapsed, setCollapsed] = React.useState(false);
    const [collapsedTraining, setcollapsedTraining] = React.useState(false);
    const [collapsedRec, setCollapsedRec] = React.useState(false);
    // const [main_drawer, setDrawer] = React.useState((<div></div>));
    const [role, setRole] = React.useState("");

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    }
    const handleCollapseT = () => {
        setcollapsedTraining(!collapsedTraining);
    }
    const handleCollapseRec = () => {
        setCollapsedRec(!collapsedRec);
    }
    const handleMobileScreen = () => {
        setMobileScreen(!mobileScreen);
    }
    const Admin_drawerList = (
        <div>
            <Divider />
            <List>
                <Link to='/ManagersList' className= {classes.links} >
                <ListItem classes={{ root: classes.iconColor }} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><RemoveCircleOutline/></ListItemIcon>
                    <ListItemText>Remove Managers</ListItemText>
                </ListItem>
                </Link>
                <Link to='/PromotionList' className={classes.links}>
                <ListItem classes={{ root: classes.iconColor }} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><AddCircleOutline /></ListItemIcon>
                    <ListItemText>Promote To Manager</ListItemText>
                </ListItem>
                </Link>
                <Link to='/Departments' className={classes.links}>
                <ListItem classes={{ root: classes.iconColor }} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><DeveloperBoard/></ListItemIcon>
                    <ListItemText>Department Management</ListItemText>
                </ListItem>
                </Link>
            </List>

        </div>
    );
    const Man_drawerList = (
        <div>
            <Divider />
            <List>
                <Link to='/PunchTimer' className={classes.links}>
                    <ListItem classes={{ root: classes.iconColor }} button>
                        <ListItemIcon classes={{ root: classes.iconColor }}><AccessTime /></ListItemIcon>
                        <ListItemText>Clock In</ListItemText>
                    </ListItem>
                </Link>
                <Box height={20} />
                <ListItem classes={{ root: classes.iconColor }} onClick={handleCollapse} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><Report /></ListItemIcon>
                    <ListItemText>Generate Report</ListItemText>
                    {collapsed ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={collapsed} timeout='auto' unmountOnExit>
                    <List>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon classes={{ root: classes.iconColor }}><RemoveCircleOutline /></ListItemIcon>
                            <ListItemText>Termination Report</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon classes={{ root: classes.iconColor }}><AddCircleOutline /></ListItemIcon>
                            <ListItemText>New Hires Report</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon classes={{ root: classes.iconColor }}><AddCircleOutline /></ListItemIcon>
                            <ListItemText>New Managers Report</ListItemText>
                        </ListItem>
                        <ListItem className={classes.nestedList} button>
                            <ListItemIcon classes={{ root: classes.iconColor }}><EmojiPeople /></ListItemIcon>
                            <ListItemText>On Leave Report</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <Box height={20} />
                <Link to='/Employee' className={classes.links}>
                    <ListItem classes={{ root: classes.iconColor }} button>
                        <ListItemIcon classes={{ root: classes.iconColor }}><DirectionsRun /></ListItemIcon>
                        <ListItemText>Performance Rating</ListItemText>
                    </ListItem >
                </Link>
                <Box height={20} />
                <ListItem classes={{ root: classes.iconColor }} onClick={handleCollapseRec} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><GroupAdd /></ListItemIcon>
                    <ListItemText>Recruitment</ListItemText>
                    {collapsedRec ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={collapsedRec} timeout='auto' unmountOnExit>
                    <List>
                        <Link to='/RecriutmentForm' className={classes.links}>
                            <ListItem className={classes.nestedList} button>
                                <ListItemIcon classes={{ root: classes.iconColor }}><PostAdd /></ListItemIcon>
                                <ListItemText>Post New Job Offer</ListItemText>
                            </ListItem>
                        </Link>
                        <Link to='/Applicants' className={classes.links}>
                            <ListItem className={classes.nestedList} button>
                                <ListItemIcon classes={{ root: classes.iconColor }}><ViewList /></ListItemIcon>
                                <ListItemText>Job Applicants</ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <Box height={20} />
                <ListItem classes={{ root: classes.iconColor }} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><PlaylistAddCheck /></ListItemIcon>
                    <ListItemText>Employee Attendances</ListItemText>
                </ListItem>
                <Box height={20} />
                <Link to='/LeaveRequests' className={classes.links}>
                    <ListItem classes={{ root: classes.iconColor }} button>
                        <ListItemIcon classes={{ root: classes.iconColor }}><EmojiPeople /></ListItemIcon>
                        <ListItemText>Leave Requests</ListItemText>
                    </ListItem>
                </Link>
                <Box height={20} />
                <ListItem classes={{ root: classes.iconColor }} onClick={handleCollapseT} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><Book /></ListItemIcon>
                    <ListItemText>Training</ListItemText>
                    {collapsedTraining ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={collapsedTraining} timeout='auto' unmountOnExit>
                    <List>
                        <Link to='/AddTraining' className={classes.links}>
                            <ListItem className={classes.nestedList} button>
                                <ListItemIcon classes={{ root: classes.iconColor }}><Add /></ListItemIcon>
                                <ListItemText>Add Training Course</ListItemText>
                            </ListItem>
                        </Link>
                        <Link to='/RemoveCourses' className={classes.links}>
                            <ListItem className={classes.nestedList} button>
                                <ListItemIcon classes={{ root: classes.iconColor }}><Remove /></ListItemIcon>
                                <ListItemText>Remove training Course(s)</ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
            </List>

        </div>
    );
    const Emp_drawerList = (
        <div>
            <Divider/>
            <List>
                <Link to = '/PunchTimer' className = {classes.links}>
                <ListItem className={classes.itemColor} button>
                    <ListItemIcon><AccessTime/></ListItemIcon>
                    <ListItemText>Clock In</ListItemText>
                </ListItem>
                </Link>
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
    const App_drawerList = (
        <div>
            <Divider />
            <List>
                <Link to='/ApplicationForm' className={classes.links}>
                    <ListItem classes={{ root: classes.iconColor }} button>
                        <ListItemIcon classes={{ root: classes.iconColor }}><Publish /></ListItemIcon>
                        <ListItemText>Submitt a CV form</ListItemText>
                    </ListItem>
                </Link>
                <ListItem classes={{ root: classes.iconColor }} button>
                    <ListItemIcon classes={{ root: classes.iconColor }}><Visibility /></ListItemIcon>
                    <ListItemText>View Job Offers</ListItemText>
                </ListItem>
            </List>

        </div>
    );

    useEffect(() => {
        setRole(Cookies.get('role'))
    }, [])

    const drawerHeader = (
        <div>
            <Box display='flex' justifyContent='center' p={2}>
                <Typography variant='h6' className={classes.itemHeader}>HR MANAGEMENT SYSTEM</Typography>
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
                        onClick={handleMobileScreen}
                        className={classes.menuToggle}
                    > 
                        <Menu className={classes.iconColor} />
                    </IconButton>
                    <Box display='flex' justifyContent='flex-end' width='100%'>
                        <Link to="/ProfileUpdate" className={classes.links}>
                        <Tooltip title="Update Info">
                        <IconButton classes={{root:classes.accountIcons}}><AccountCircle/></IconButton>
                        </Tooltip>
                        </Link>
                        {role === "Employee" ?
                        <Tooltip title="Your Rating">
                            <IconButton classes={{root:classes.accountIcons}}><StarRate/></IconButton>
                        </Tooltip> : null}
                        <Tooltip title="LogOut">
                        <IconButton classes={{root:classes.accountIcons}} onClick={() => { props.handleLogOut() }}><ExitToApp/></IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        open={mobileScreen}
                        onClose={handleMobileScreen}
                        variant='temporary'
                        classes={{ paper: classes.drawerPaper }}
                    >
                        {drawerHeader}
                        {role === "Manager" ? Man_drawerList : role === "Applicant" ? App_drawerList : role === "Employee" ? Emp_drawerList : Admin_drawerList}
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
                        {role === "Manager" ? Man_drawerList : role === "Applicant" ? App_drawerList : Admin_drawerList}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}
export default MangerPage;