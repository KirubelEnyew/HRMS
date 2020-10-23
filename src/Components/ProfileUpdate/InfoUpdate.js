import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField } from '@material-ui/core';
import useStyle from '../../Styling';
const InfoUpdate = () => {
    const iClasses = useStyle();
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container className={iClasses.grid}>
                    <Grid item md={6} xs={12}>
                        <form>
                            <Paper>
                                <Box display="flex" flexDirection="column">
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField fullWidth label="User Name"/></Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}>
                                        <TextField
                                            fullWidth
                                            label="Previous Password"
                                            type="password"
                                        />
                                    </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}>
                                        <TextField
                                            fullWidth
                                            label="New Password"
                                            type="password"
                                        />
                                    </Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}>
                                        <TextField
                                            fullWidth
                                            label="RE-enter New Password"
                                            type="password"
                                        />
                                    </Box>
                                    <Box paddingY={2}/>
                                    <Grid item>
                                    <Box mx={6} my={3} display="flex" flexDirection="row">
                                        <Button className={iClasses.submitBtn} type="submit">Update Profile</Button>
                                        <Box marginX={2}/>
                                        <Button>Cancel</Button>
                                    </Box>
                                    </Grid>
                                </Box>
                            </Paper>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default InfoUpdate;