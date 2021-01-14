import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import { ThumbDown } from '@material-ui/icons';
import React from 'react';
import axios from 'axios';
import useStyle from '../../Styling';
import cookies from 'js-cookie';
const ManagersList = () => {
    const classes = useStyle();
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetchEmployee()
    }, [])

    const fetchEmployee = async () => {
        try {
            const res = await axios.get('api/admin/getUsers/?role=Managers&page=1&perPage=5',
                {headers: {"Authorization" : cookies.get('jwt')}}
            );
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
            <Container className={classes.dataContainer}>
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
                                        <Tooltip title="Demote">
                                            <IconButton><ThumbDown/></IconButton>
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

export default ManagersList;