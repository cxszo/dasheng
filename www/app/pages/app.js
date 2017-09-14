
import 'antd/dist/antd.css';

import React from 'react';


import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './home'
import Sign from './sign'

import Nofound from './404'

const RouterMap = () => (
  <Router>
    <div>
        {
        //   <ul>
        //   <li><Link to="/">Home</Link></li>
        //   <li><Link to="/sign_in">sign_in</Link></li>
        //   <li><Link to="/sign_up">sign_up</Link></li>
        // </ul>
        // <hr/>
        }
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sign_:type(in|up)" component={Sign}/>
        <Route component={Nofound}/>
      </Switch>
    </div>
  </Router>
)

export default RouterMap

//  <Route component={Nofound}/>