import { Container, IconButton, TableBody, TableCell, TableContainer, Table, TableHead, TableRow, Tooltip } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import useStyle from '../../Styling';

const Courses = () => {
     const classes = useStyle();
     const [status, setStatus] = React.useState(false);
     const handleStatus = () => {
          setStatus(!status);
     }
     return (
          <div>
               <Container className={classes.dataContainer}>
                    <TableContainer>
                         <Table>
                              <TableHead>
                                   <TableRow>
                                        <TableCell>Course Name</TableCell>
                                        <TableCell>Course Category</TableCell>
                                        <TableCell>Course Instructor</TableCell>
                                        <TableCell>Action</TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>
                                             <Tooltip title="Remove">
                                                  <IconButton><Delete /></IconButton>
                                             </Tooltip>
                                        </TableCell>
                                        {/* {status?
                                   <TableCell><Button>Course Complete</Button></TableCell>
                                   :<TableCell><Button>Take Course</Button></TableCell>
                                   }     */}
                                   </TableRow>
                              </TableBody>
                         </Table>
                    </TableContainer>
               </Container>
          </div>
     );

}

export default Courses;