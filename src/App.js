import React, { Component } from 'react';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom'


// import Adminlogin from './Component/User/Adminlogin';
// import User from './Component/User/User';

 import Admin from './components/Homeadmin'

import User from './components/User/User'

class App extends Component {
  render() {
    return (
      <Router >
     
        <Switch>
        {/* <Route  path='/admin' component={Adminlogin} />  */}
           <Route  path='/admindashboard' component={Admin} />  
          <Route path='/' component={User} />
         
          
      </Switch>
     
      
      </Router>
  );
  }
}

export default App;