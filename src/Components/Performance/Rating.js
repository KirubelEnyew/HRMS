import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';

const Rate = () => {
    return (
        <div>
            <Container>
                <Grid container spacing = {2}>
                    <Grid item md={5} xs={12}>
                        <Box display = "flex">
                            <FormControl fullWidth>
                                <InputLabel>Rating</InputLabel>
                                <Select>
                                    <MenuItem value={'1'}>1</MenuItem>
                                    <MenuItem value={'2'}>2</MenuItem>
                                    <MenuItem value={'3'}>3</MenuItem>
                                    <MenuItem value={'4'}>4</MenuItem>
                                    <MenuItem value={'5'}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rowsMax={2}
                            label="Comment"
                        />
                    </Grid>
                    <Grid item md={10} xs={12}>
                        <Box height={10}/>
                        <Button fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}

export default Rate;