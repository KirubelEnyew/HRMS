import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
const Attendances = () => {
    return (
        <div>
            <Container className={classes.dataContainer}>
               <TableContainer>
                    <Table>
                         <TableHead>
                              <TableRow>
                              <TableCell>Employee Name</TableCell>
                              <TableCell>sex</TableCell>
                              <TableCell>Dates Absent</TableCell>
                              <TableCell>On leave</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              <TableRow>
                                   <TableCell></TableCell>
                                   <TableCell></TableCell>
                                   <TableCell></TableCell>    
                                   <TableCell></TableCell>    
                              </TableRow>
                         </TableBody>
                    </Table>
               </TableContainer>
          </Container>
        </div>
    );

}

export default Attendances;