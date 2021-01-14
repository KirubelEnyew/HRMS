import React from 'react';
import TerminationReports from './Components/Reports/TerminationReports'
import SignIn from './Components/LogIn/SignIn.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import useStyle from './Styling.js';
import LeaveRequestsPage from './Components/Leave/LeaveRequestsPage';
import LeaveRequestForm from './Components/Leave/LeaveRequestForm';
import InfoUpdate from './Components/ProfileUpdate/InfoUpdate';
import MangerPage from './Components/Manager/ManagerPage';
import CreateAcc from './Components/SignUp/CreateAcc';
import Rating from './Components/Performance/Rating';
import RecruitmentForm from './Components/Recruitment/RecruitmentForm';
import EmployeeList from './Components/Performance/EmployeeList';
import ApplicantList from './Components/Recruitment/ApplicantList';
import MoreInfo from './Components/Recruitment/MoreInfo';
import TrainingForm from './Components/Training/TrainingForm';
import CoursesList from './Components/Training/CoursesList';
import JobApplication from './Components/Recruitment/JobApplication';
import ClockInOut from './Components/Attendance/ClockInOut';
import RateEmployee from './Components/Performance/EmployeeRating';
import Home from './Components/Home/Home';
import ManagersList from './Components/Admin/ManagersList';
import PromotionList from './Components/Admin/PromotionList'
import Departments from './Components/Admin/Departments';
import Cookies from 'js-cookie';
import About from './About';

const App = () => {
  const classes = useStyle();
  const [drawer, setDrawer] = React.useState(false);
  const [logged, setLogged] = React.useState(false);
  const [data, setData] = React.useState({});
  const [role, setRole] = React.useState("");
  
  const handleSign = (data) => {
    setData(data);
    setRole(data.user.role);
    Cookies.set('jwt', data.token);
    Cookies.set('role', data.user.role);
    setLogged(true);
    setDrawer(true);
  }
  
  const handleLogOut = () => {
    setLogged(false);
    setDrawer(false);
    Cookies.remove('jwt');
  }

  React.useEffect(() => { readCookie() }, [])

  const readCookie = () => {
    const user = Cookies.get('jwt');
    if (user) {
      setLogged(true);
      setDrawer(true);
    }
    else {
      setLogged(false);
    }
  }

  return (
    <BrowserRouter>
      <div className={classes.root}>
        {drawer && <MangerPage handleLogOut={handleLogOut} user = {role}/>}
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <ProtectedLogin path="/" exact logged={logged} component={SignIn} handleSign={handleSign} />
            <ProtectedRoute path="/Home" component={Home} logged={logged} />
            <ProtectedRoute path="/reports" component={TerminationReports} logged={logged} />
            <ProtectedRoute path="/LeaveRequests" component={LeaveRequestsPage} logged={logged} />
            <ProtectedRoute path="/LeaveForm" component={LeaveRequestForm} logged={logged} />
            <ProtectedRoute path="/ManagersList" component={ManagersList} logged={logged} />
            <ProtectedRoute path="/PromotionList" component={PromotionList} logged={logged} />
            <ProtectedRoute path="/Departments" component={Departments} logged={logged} />
            <ProtectedRoute path="/ProfileUpdate" component={InfoUpdate} logged={logged} />
            <ProtectedNotLoggedRoute path="/SignUp" component={CreateAcc} logged={logged} />
            <ProtectedNotLoggedRoute path="/About" component={About} logged={logged} />
            <ProtectedRoute path="/Rating" component={Rating} logged={logged} />
            <ProtectedRoute path="/Employee" component={EmployeeList} logged={logged} />
            <ProtectedRoute path="/Applicants" component={ApplicantList} logged={logged} />
            <ProtectedRoute path="/ApplicantInfo" component={MoreInfo} logged={logged} />
            <ProtectedRoute path="/RecriutmentForm" component={RecruitmentForm} logged={logged} />
            <ProtectedRoute path="/AddTraining" component={TrainingForm} logged={logged} />
            <ProtectedRoute path="/RemoveCourses" component={CoursesList} logged={logged} />
            <ProtectedRoute path="/ApplicationForm" component={JobApplication} logged={logged} />
            <ProtectedRoute path="/Courses" component={CoursesList} logged={logged} />
            <ProtectedRoute path="/PunchTimer" component={ClockInOut} logged={logged} />
            <ProtectedRoute path="/RateEmp" component={RateEmployee} logged={logged} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const ProtectedLogin = ({ logged, component: Component, handleSign, ...rest }) => {
  return <Route
    {...rest}
    render={() => !logged ? (
      <Component handleSign={handleSign} />
    ) : (<Redirect
      to={{
        pathname: '/Home'
      }}
    />)}
  />
}

const ProtectedRoute = ({ logged, component: Component, handleLogOut, ...rest }) => {
  return <Route
    {...rest}
    render={() => logged ? (
      <Component handleLogOut = {handleLogOut}/>
    ) : (<Redirect
      to={{
        pathname: '/'
      }}
    />)}
  />
}

const ProtectedNotLoggedRoute = ({ logged, component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={() => !logged ? (
      <Component />
    ) : (<Redirect
      to={{
        pathname: '/'
      }}
    />)}
  />
}
export default App;