

import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


const Page2 = ({ match }) => (
    <div>
      <h2>Page2</h2>
      <ul>
        <li>
          <Link to={`${match.url}/branch1`}>
            branch1
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/branch2`}>
            branch2
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/branch3`}>
            branch3
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:branchId`} component={Branch} />
      <Route exact path={match.url} render={() => (
        <h3>Default Information</h3>
      )} />
    </div>
  )
  
  const Branch = ({ match }) => {
    console.log(match);
    return (
      <div>
        <h3>{match.params.branchId}</h3>
      </div>
    )
  }
  




export default Page2