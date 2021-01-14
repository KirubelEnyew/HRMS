import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';
import React from 'react';
import axios from 'axios';
const Promotions = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetchEmployee()
    }, [])

    const fetchEmployee = async () => {
        try {
            const res = await axios.get('api/managers/getEmployee/?page=1&&perPage=2');
            // if(res.status === 200){
            setData(res.data.users)
            console.log(res.data.users)
            // }
        } catch (error) {
            alert('Error')
            console.log(error)
        }
    }
    return (
        <div>
            <Container>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Sex</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((value) => (
                                <TableRow key={value.id}>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{value.sex}</TableCell>
                                    <TableCell>{value.email}</TableCell>
                                    <TableCell>
                                        <Tooltip title="Promote to Manager">
                                            <IconButton><ThumbUp /></IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );

}

export default Promotions;