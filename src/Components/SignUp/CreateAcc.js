import React from 'react';
import {Paper,Button,TextField,Container,Grid,Box} from '@material-ui/core';
import useStyle from '../../Styling';
const CreateAcc = () =>{
    const caClasses = useStyle();
    return(
        <div>
            <Container maxWidth = "xl" >
                <Grid Container className ={caClasses.grid}>
                    <Grid item xs={12} md={6}>
                        <form>
                            <Paper>
                                <Box display = "flex" flexDirection = "column">
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="User Name"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="email" type = "email"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="Set Password" type = "password"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="Re-Enter Password" type = "password"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="Enter Address"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="Enter phone Number" type="number"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="Emergency Contact Name"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box marginX ={3}><TextField required fullWidth label="Emergency Contact" type = "number"></TextField> </Box>
                                    <Box paddingY = {2}/>
                                    <Box display="flex" marginX={3} justifyContent="right" ><Button type="submit" className={caClasses.submitBtn}>Submit</Button></Box>
                                    <Box paddingY={2}/>
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