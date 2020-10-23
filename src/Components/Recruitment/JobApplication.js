import React from 'react';
import { Box, Grid, Container, TextField, Paper, Button, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import useStyle from '../../Styling';
//ADD A DEPARTMENT
const JobApplication = () => {
    const jClasses = useStyle();
    return (
        <div>
            <Container maxWidth="xl">
                <Box paddingY={3} />
                <Grid container className={jClasses.grid} >
                    <Grid item md={6} xs={12}>
                        <form>
                            <Paper>
                                <Box display="flex" flexDirection="column">
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField fullWidth label="Institute Of Education" variant="outlined" /></Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField fullWidth label="Field Of Study" variant="outlined" /></Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField label="Years Of Experience" type="number" /></Box>
                                    <Box paddingY={2} />
                                    <Box marginX={3}><TextField fullWidth label="Areas Of Knowledge" variant="outlined" /></Box>
                                    <FormControl className={jClasses.formControl}>
                                        <InputLabel>Deparment Applied To</InputLabel>
                                        <Select>
                                            <MenuItem></MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box paddingY={2} />
                                    <Box display="flex" marginX={3} justifyContent="right" ><Button type="submit" className={jClasses.submitBtn}>Submit</Button></Box>
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
export default JobApplication;