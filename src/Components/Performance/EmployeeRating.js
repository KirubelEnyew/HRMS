import React from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from '../../Styling';
import userImage from '../../res/user.jpg';
import { Container, Grid, Box, Avatar, Typography, TextField, Button } from '@material-ui/core';

const RateEmployee = (props) => {
    const classes = useStyles();
    const [user, setUser] = React.useState({});
    const { department, email, name, phone, sex } = user;

    React.useEffect(() => {
        setUser(props.location.state.data)
    }, [])
    return (
        <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid container item md={6} xs={12} className={classes.basicContainer}>
                    {/* <Paper className={classes.infoPaper}> */}
                        <Container maxWidth='xl' className={classes.imageContainer}>
                            <Avatar src={userImage} className={classes.moreInfoAvatar} />
                        </Container>
                        <Container>
                            <Box display='flex' flexGrow='1' justifyContent='flex-start'>
                                <Typography className={classes.basicHeader}>Basic Information</Typography>
                            </Box>
                        </Container>
                        <Container>
                            <Grid item container spacing={3}>
                                <Grid item xs={6}>
                                    <Box display='flex' flexDirection='column'>
                                        <Box my={2} />
                                        <Typography>Full Name</Typography>
                                        <Box my={2} />
                                        <Typography>Gender</Typography>
                                        <Box my={2} />
                                        <Typography>Phone Num</Typography>
                                        <Box my={2} />
                                        <Typography>Department</Typography>
                                        <Box my={2} />
                                        <Typography>Email</Typography>
                                        <Box my={2} />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box display='flex' flexDirection='column'>
                                        <Box my={2} />
                                        <Typography style={{ overflow: 'hidden' }}>{name}</Typography>
                                        <Box my={2} />
                                        <Typography>{sex}</Typography>
                                        <Box my={2} />
                                        <Typography>{phone}</Typography>
                                        <Box my={2} />
                                        <Typography>{department}</Typography>
                                        <Box my={2} />
                                        <Typography>{email}</Typography>
                                        <Box my={2} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    {/* </Paper> */}
                </Grid>

                <Grid container item md={6} xs={12} classes={{root:classes.basicContainer}}>
                    <Box display="flex" justifyContent="center" alignItems="flex-top" flexDirection="column" style={{width: "100%"}}>
                        <TextField maxWidth label="Rating"/>
                        <Box height={40}/>
                        <TextField maxWidth label="Comment"/>
                        <Box height={40}/>
                        <Button fullWidth classes={{root:classes.submitBtn}}>Submit</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );

}

export default withRouter(RateEmployee);