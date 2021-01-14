import { Box, Button, Grid, Container, Card } from '@material-ui/core';
import React, { useEffect } from 'react';
import useStyle from '../../Styling';

const ClockInOut = () => {
    const classes = useStyle();
    const [inTime, setInTime] = React.useState(new Date());
    const [outTime, setOutTime] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());
    // const [minutes, setMinutes] = React.useState('00');
    // const [date, setdate] = React.useState('00');
    useEffect(()=>{
        var timer = setInterval(()=>setTime(new Date()),1000)
    });
    const [status, setStatus] = React.useState(false);
    const handleClockIn = (event) => {
        event.preventDefault();
        setStatus(!status);
        {status?
        setOutTime(time.getTime()):
        setInTime(time.getTime())
        }   
        console.log("in time"+inTime);
        console.log("out time"+outTime);
    }
    return (
        <div>
            <Container maxWidth='xl'>
                <Box paddingY={10} />
                <Grid container className={classes.grid}>
                    <Grid item>
                        <Box display='flex' flexDirection='row'>
                            <Card>
                                <Grid container className={classes.grid}>
                                    <Grid item>
                                        <Box display='flex' flexDirection='row'>
                                            <Card className={classes.card} variant='outlined'>
                                                <h1>Time: {time.toLocaleTimeString()}</h1>
                                            </Card>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Box>
                        <Box paddingY={3} />
                        <Box display='flex' justifyContent='center'>
                            {status ?
                                <Button classes={{ root: classes.confirmBtns }} type='submit' onClick={handleClockIn}>Punch Out</Button> :
                                <Button classes={{ root: classes.confirmBtns }} type='submit' onClick={handleClockIn}>Punch In</Button>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}

export default ClockInOut;