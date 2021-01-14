import React from 'react';
import { Paper, Button, TextField, Container, Grid, Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyle from '../../Styling';
import { Link } from 'react-router-dom';
const CreateAcc = () => {
    const caClasses = useStyle();
    return (
        <div>
            <AppBar classes={{ root: caClasses.signInAppBar }}>
                <Toolbar>
                    <Typography variant='h6'>Human Resource MS</Typography>
                </Toolbar>
            </AppBar>
            <Box paddingY={2} />
            <Container maxWidth="xl" >
                <Grid Container className={caClasses.grid}>
                    <Grid item xs={12} md={6}>
                        <form>
                            <Paper>
                                <Box display="flex" flexDirection="column">
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="User Name"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="email" type="email"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="Set Password" type="password"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="Re-Enter Password" type="password"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="Enter Address"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="Enter phone Number" type="number"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="Emergency Contact Name"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField required fullWidth label="Emergency Contact" type="number"></TextField> </Box>
                                    <Box paddingY={2} />
                                    <Box display="flex" marginX={3} justifyContent="right" flexDirection="row" >
                                        <Button type="submit" classes={{root:caClasses.submitBtn}}>Submit</Button>
                                        <Box paddingX = {3}/>
                                        <Link to='/' className={caClasses.links}>
                                        <Button classes={{root:caClasses.cancelBtn}}>Cancel</Button></Link>
                                    </Box>
                                    <Box paddingY={2} />
                                </Box>
                            </Paper>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default CreateAcc;