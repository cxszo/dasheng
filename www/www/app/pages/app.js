

import React from 'react';



import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './home'
import Sign_in from './sign_in'
import Sign_up from './sign_up'


const RouterMap = () => (
  <Router>
    <div>
      {
        // <ul>
        //   <li><Link to="/">Home</Link></li>
        //   <li><Link to="/sign_in">sign_in</Link></li>
        //   <li><Link to="/sign_up">sign_up</Link></li>
        // </ul>
        // <hr/>
      }

      <Route exact path="/" component={Home}/>
      <Route path="/sign_in" component={Sign_in}/>
      <Route path="/sign_up" component={Sign_up}/>
    </div>
  </Router>
)

export default RouterMap