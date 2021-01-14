import React from 'react';
import { Container, Grid, Box, Avatar, Typography, TextField, Button, TableContainer, Table, TableHead, TableCell, TableBody, IconButton, Tooltip } from '@material-ui/core';
import useStyle from '../../Styling';
import { Delete } from '@material-ui/icons';
const Departments = () => {
    const classes = useStyle();
    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                    <Container>
                        <Box display="flex" justifyContent="center">
                            <Typography classes={{root:classes.basicHeader}}>Remove Department(s)</Typography>
                        </Box>
                        <TableContainer classes={{ root: classes.dataContainer }}>
                            <Table>
                                <TableHead>
                                    <TableCell>Department Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableHead>
                                <TableBody>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <Tooltip title="Remove">
                                            <IconButton><Delete /></IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                    </Grid>
                    <Grid container item md={6} xs={12} className={classes.basicContainer}>
                        <Box display="flex" alignItems="flex-top" flexDirection="column" style={{ width: "100%" }}>
                        <Box display="flex" justifyContent="center">
                            <Typography classes={{root:classes.basicHeader}}>Add Department</Typography>
                            
                        </Box>
                        <Box paddingY={2}/>
                            <form>
                                <TextField variant='outlined' fullWidth required label="Department Name" />
                                <Box mx={6} my={3} display="flex" justifyContent="center"><Button classes={{ root: classes.submitBtn }} type="submit">Add</Button></Box>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}

export default Departments;