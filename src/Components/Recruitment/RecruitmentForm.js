import React from 'react';
import { Paper, Button, Container, Grid, Box, FormControl, Select, MenuItem, InputLabel, TextField } from '@material-ui/core';
import useStyle from '../../Styling';
const RecruitmentForm = () => {
    const recClasses = useStyle();
    return (
        <div className={recClasses.root}>
            <Container maxWidth='xl'>
                <Box paddingY={3} />
                <Grid container className={recClasses.grid}>
                    <Grid item md={6} xs={12}>
                        <form>
                            <Paper>
                                <Box display='flex' flexDirection='column'>
                                    <Box paddingY={2} />
                                    <FormControl className={recClasses.formControl}>
                                        <InputLabel>Department</InputLabel>
                                        <Select required>
                                            <MenuItem></MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box marginX={3}><TextField required fullWidth type="number" label="Required Empolyee Amount" /></Box>
                                    <Box paddingY={2} />
                                    <Box display="flex" marginX={3} justifyContent="right" ><Button type="submit" className={recClasses.submitBtn}>Submit</Button></Box>
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
export default RecruitmentForm;