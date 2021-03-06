import { IconButton, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import React from 'react';
import useStyle from '../../Styling';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import { Star } from '@material-ui/icons';

const EmployeeList = ({history}) => {
    const classes = useStyle();
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
            console.log('qwer')
            // }
        } catch (error) {
            alert('Error')
            console.log(error)
        }
    }

    const handleRating = ()=>{

    }

    return (
        <div>
            <Container classes={{ root: classes.dataContainer }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Sex</TableCell>
                                <TableCell>Department</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((value) => (
                                <TableRow key={value._id}>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{value.sex}</TableCell>
                                    <TableCell>{value.department}</TableCell>
                                    <TableCell>
                                        <Tooltip title = "Rate Employee">
                                            <IconButton onClick={()=>{const info = value; history.push({pathname: '/RateEmp',state: {data: info}})}}><Star/></IconButton>
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

export default withRouter(EmployeeList);