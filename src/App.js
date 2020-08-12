import React from 'react';
import Home from './Home.js';
import Next from './AppDrawer.js';
import Dash from './Dash.js';
import About from './About.js';
import useStyle from './Styling.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
const App = ()=>{
  const classes = useStyle();
  return(
    <div className={classes.root}>
      
      
            <BrowserRouter>
            <Next/>
            <div className={classes.content}>
            <div className={classes.toolbar}/>
              <Switch>
                <Route
                  component={Home}
                  path='/'
                  exact
                />
                <Route
                  component={Dash}
                  path='/dash'
                />
                <Route
                  component={About}
                  path='/abt'
                />
                </Switch>
                </div>
              </BrowserRouter>  
      
    </div>
  );
}
export default App;