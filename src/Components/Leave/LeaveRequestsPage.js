import React from 'react';
import { Box, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import useStyle from '../../Styling';
import { Close, Done } from '@material-ui/icons';

const LeaveRequests = () => {
    const classes = useStyle();
    return (
        <div>
            
          <Container className={classes.dataContainer}>
               <TableContainer>
                    <Table>
                         <TableHead>
                              <TableRow>
                              <TableCell>Employee Name</TableCell>
                              <TableCell>Sex</TableCell>
                              <TableCell>Request type</TableCell>
                              <TableCell>Action</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              <TableRow>
                                   <TableCell></TableCell>
                                   <TableCell></TableCell>
                                   <TableCell></TableCell>
                                   <TableCell>
                                       <Tooltip title="Approve">
                                            <IconButton><Done/></IconButton>
                                       </Tooltip>
                                       <Box marginX={2}/>
                                       <Tooltip title="Deny">
                                            <IconButton><Close/></IconButton>
                                       </Tooltip>
                                    </TableCell>    
                              </TableRow>
                         </TableBody>
                    </Table>
               </TableContainer>
          </Container>
        </div>
    );

}

export default LeaveRequests;