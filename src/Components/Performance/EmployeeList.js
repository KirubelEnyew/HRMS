import { Container, Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import useStyle from '../../Styling';

const EmployeeList =() => {
    const classes = useStyle();
     return (
     <div>
        <Container className={classes.tableContainer}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
     </div>
     );

}

export default EmployeeList ;