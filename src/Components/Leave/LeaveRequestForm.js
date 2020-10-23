import React from 'react';
import { Select, TextField, MenuItem, Grid, Container, Box, Paper, FormControl, InputLabel, Button } from '@material-ui/core';
import useStyle from '../../Styling';

const LeaveRequestForm = () => {
    const leaveClasses = useStyle();
    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <div className={leaveClasses.root}>
            <Container maxWidth='xl'>
                <Box paddingY={3} />
                <Grid container className={leaveClasses.grid}>
                    <Grid item md={6} xs={12}>
                        <form>
                            <Paper>
                                <Box display='flex' flexDirection='column'>
                                    <FormControl className={leaveClasses.formControl}>
                                        <InputLabel>Leave Request Type</InputLabel>
                                        <Select required
                                            value={type}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Maternity Leave"}>Maternity leave</MenuItem>
                                            <MenuItem value={"Paternity leave"}>Paternity leave</MenuItem>
                                            <MenuItem value={"Sick leave"} >Sick leave</MenuItem>
                                            <MenuItem value={"Leave of Absence"}>Leave of Absence</MenuItem>
                                            <MenuItem value={"Bearement leave"}>Bearement leave</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box marginX={3}><TextField required fullWidth type="number" label="Days Required" /></Box>
                                    <Box paddingY={2} />
                                    <Box display="flex" marginX={3} justifyContent="right" ><Button type="submit" className={leaveClasses.submitBtn}>Submit</Button></Box>
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
export default LeaveRequestForm;