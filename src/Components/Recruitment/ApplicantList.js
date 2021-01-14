import { Container, Table, TableCell, TableContainer, TableBody, TableHead, Button} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from '../../Styling';

const ApplicantList =() => {
     const classes = useStyle();
     return (
     <div>
         <Container>
              <TableContainer>
                   <Table>
                        <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell>Sex</TableCell>
                         <TableCell>Department Applied To</TableCell>
                         <TableCell>Action</TableCell>
                        </TableHead>
                        <TableBody>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                         <TableCell></TableCell>
                         <TableCell>
                              <Link to='/ApplicantInfo' className={classes.links}>
                              <Button>More Info</Button>
                              </Link>
                         </TableCell>
                        </TableBody>
                   </Table>
              </TableContainer>
         </Container>
     </div>
     );

}

export default ApplicantList ;