import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import React from 'react';
import useStyle from '../../Styling';

const TrainingForm =() => {
    const classes = useStyle();
     return (
     <div>
         <Container maxWidth='xl'>
            <Grid container className={classes.grid}>
                <Grid item md={6} xs={12}>
                    <Paper>
                        <Box display='flex' flexDirection='column'>
                            <Box paddingY={2}/>
                            {/*some Categories Skill development,formal orientation,informal orientation */}
                            <Box marginX={3}>
                                <TextField fullWidth required label="Course Name"/>
                            </Box>
                            <Box paddingY={2}/>
                            <Box marginX={3}>
                                <TextField fullWidth required multiline rowsMax={2} label="Description"/>
                            </Box>
                            <Box paddingY={2}/>
                            <Box marginX={3}>
                                {/* instructor sex address not required */}
                                <TextField fullWidth required label="Instructor Name"/>
                            </Box>
                            <Box paddingY={2}/>
                            <Box marginX={3}>
                                <TextField required type='number' label="instructor Phone Number"/>
                            </Box>
                            <Box paddingY={2}/>
                            <Box marginX={3}>
                                <TextField required fullWidth type='email' label="Instructor Email"/>
                            </Box>
                            <Box paddingY={2}/>
                            <FormControl className={classes.formControl}>
                                        <InputLabel>Course Category</InputLabel>
                                        <Select required>
                                            <MenuItem></MenuItem>
                                        </Select>
                            </FormControl>
                            <Box paddingY={2}/>
                            <Box display="flex" marginX={3} justifyContent="right" >
                                <Button type="submit" className={recClasses.submitBtn}>Add Training</Button>
                            </Box>
                            <Box paddingY={2} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
         </Container>
     </div>
     );

}

export default TrainingForm ;