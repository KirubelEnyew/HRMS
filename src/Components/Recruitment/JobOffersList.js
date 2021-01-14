import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

const JobOffersList = () => {
    return (
        <div>
            <Container>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>Department</TableCell>
                            <TableCell>Number of Openinigs</TableCell>
                            <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell><Button>Apply To</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </div>
    );

}

export default JobOffersList;