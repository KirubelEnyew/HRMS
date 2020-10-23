import React,{useState} from 'react';
import axios from 'axios';
import {Box, Grid, Container, TextField, Paper, Button, Typography,AppBar,Toolbar} from '@material-ui/core';
import useStyle from '../../Styling';
import { Link } from 'react-router-dom';
const SignIn = (props) => {
  const styles = useStyle();
  const [name,setName]=useState("");
  const [pass,setPass]=useState("");
  
  const handleClick=()=>{
    if(name&&pass){
      axios.post('/api/users/login', {
        name: name,
        password : pass
      }).then((res)=>{
        if(res.status===200){
          // console.log(res.data.token)
          props.handleSign(res.data)
        }
      }).catch(err=>{console.log(err)})
    }
  } 
  // useEffect (()=>{console.log("mefe")},[]) 
  return (
      <div className = {styles.root}>
        <AppBar className={styles.signInAppBar} display = 'flex'>
                <Toolbar>
                  <Box display='flex' flexGrow={1} justifyContent='right'>
                    <Typography variant='subtitle2'>About Us</Typography>
                  </Box>
                </Toolbar>
            </AppBar>
    <Container maxWidth="xl">
      <Container>
        <Box paddingY={5}/>
        <Box display = "flex" justifyContent ="center">
          {/* <Avatar className={styles.avatar} src = "logo.svg"/> */}
        </Box>
      </Container>
      <Box paddingY={3}/>
      <Grid container className = {styles.grid} >
        <Grid item md={6} xs={12}>
          {/* <form onSubmit={handleClick}> */}
          <Paper>
            <Box display="flex" flexDirection="column">
                <Box paddingY={2}/>
                <Box marginX={3}><TextField required fullWidth label="User Name" onChange={(e)=>{setName(e.target.value)}}/></Box>
                <Box paddingY={2}/>
                <Box marginX={3}><TextField required fullWidth label="Password" type="password" onChange={(e)=>{setPass(e.target.value)}}/></Box>
                <Box paddingY={2}/>
                {/* <Link to="/Manager" className={styles.links}> */}
                <Box display="flex" marginX={3} justifyContent="center" >
                  <Button type="submit" className={styles.submitBtn} onClick={handleClick}>Log in</Button>
                  </Box>
                {/* </Link> */}
                <Box paddingY={2}/>
            </Box>
          </Paper>
          {/* </form> */}
        </Grid>
      </Grid>
      <Container >
        <Box paddingY = {2}/>
        <Box display = 'flex' justifyContent = 'center'>
        <Typography>Not SIgned In?</Typography>
        <Box mx={1}/>
        <Typography variant="subtitle1"><Link to='/SignUp'>Create Account</Link></Typography>
        </Box>
      </Container>
    </Container>
    </div>
    );
}
export default SignIn;