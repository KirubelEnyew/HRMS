import React, { Component } from 'react';
import TerminationReports from './Components/Reports/TerminationReports'
import SignIn from './Components/LogIn/SignIn.js';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import useStyle from './Styling.js';
import ManagerPage from './Components/Manager/ManagerPage';
import RecruitmentForm from './Components/Recruitment/RecruitmentForm';
import LeaveRequestsPage from './Components/Leave/LeaveRequestsPage';
import LeaveRequestForm from './Components/Leave/LeaveRequestForm';
import InfoUpdate from './Components/ProfileUpdate/InfoUpdate';
import MangerPage from './Components/Manager/ManagerPage';
import CreateAcc from './Components/SignUp/CreateAcc'
import Cookies from 'js-cookie';
const App = () => {
  const classes = useStyle();
  const [drawer,setDrawer] = React.useState(false);
  const [logged,setLogged] = React.useState(false);
  const [data,setData] = React.useState({});
  const handleSign = (data) => {
    setData(data);
    Cookies.set('jwt', data.token);
    setLogged(true);
    setDrawer(true);
  }
  React.useEffect(()=>{readCookie()},[])
  const readCookie = () => {
    const user = Cookies.get('jwt');
    if(user){
      setLogged(true);
      setDrawer(true);
    } 
    else{
      setLogged(false);
    }
  }
  return (
    <BrowserRouter>
    <div className={classes.root}>
      {drawer && <MangerPage/>}
      <div className={classes.content}>
      <div className={classes.toolbar}/>
      <Switch>
        <ProtectedLogin path ="/" exact logged={logged} component={SignIn} handleSign={handleSign}/>
        <ProtectedRoute path = "/reports" component={TerminationReports} logged={logged}/>
        <ProtectedRoute path = "/Recruitment" component={RecruitmentForm}/>
        <ProtectedRoute path = "/LeaveRequests" component ={LeaveRequestsPage}/>
        <ProtectedRoute path = "/LeaveForm" component={LeaveRequestForm}/>
        <ProtectedRoute path = "/ProfileUpdate" component={InfoUpdate}/>
        <ProtectedSignUp path = "/SignUp" component={CreateAcc}/>
      </Switch>
    </div>
    </div>
    </BrowserRouter>
    );
}

const ProtectedLogin = ({logged, component: Component, handleSign, ...rest}) =>{
  return <Route
    {...rest}
    render = {()=> !logged?(
      <Component handleSign={handleSign}/>
    ):(<Redirect
      to={{
        pathname: '/reports'
      }}
    />)}
  />
}

const ProtectedRoute = ({logged, component: Component, ...rest}) =>{
  return <Route
    {...rest}
    render = {()=> logged?(
      <Component/>
    ):(<Redirect
      to={{
        pathname: '/'
      }}
    />)}
  />
}

const ProtectedSignUp = ({logged, component: Component, ...rest}) =>{
  return <Route
    {...rest}
    render = {()=> !logged?(
      <Component/>
    ):(<Redirect
      to={{
        pathname: '/'
      }}
    />)}
  />
}
export default App;