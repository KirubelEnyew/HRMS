import { Avatar, Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../../Styling';
import userImage from '../../res/user.jpg';
const MoreInfo = () => {
     const classes = useStyle();
     return (
          <div>
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
                                                  <Typography>Field of Study</Typography>
                                                  <Box my={2} />
                                                  <Typography>Phone Num</Typography>
                                                  <Box my={2} />
                                                  <Typography>Experience years</Typography>
                                                  <Box my={2} />
                                                  <Typography>Email</Typography>
                                                  <Box my={2} />
                                             </Box>
                                        </Grid>
                                   </Grid>
                              </Container>
                         </Grid>
                    </Grid>
               </Container>

          </div>
     );

}

export default MoreInfo;