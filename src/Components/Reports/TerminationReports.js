import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core';
import useStyle from '../../Styling';

const TerminationReports = () => {
    const rclasses = useStyle();
    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container className={rclasses.grid}>
                <Grid item md={6} xs={12}>
                    
                    <Box display="flex" flexDirection="row">
                    </Box>
                    
                </Grid>
                </Grid>
            </Container>
        </div>
    );

}

export default TerminationReports;