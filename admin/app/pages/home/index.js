




import './index.scss'

import React, {PureComponent} from 'react'

import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import { Icon } from 'antd'

import Menu from '../../config/menu'

import Userinfo from '../userinfo'
import Test from '../test'
import Nufound from '../404'

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
      <route.component {...props} routes={route.routes}/>
    )}/>
)

class Home extends PureComponent{
    // constructor(props){
    //     super(props)

    // }
    render(){
        let match = this.props.match;
        return(
            <div className="home">

                {

                    // <Link to='/'>首页</Link>
                }
                <Switch>
                    <Route exact path={match.url} render={() => (
                        <h3>welcome</h3>
                    )}/>
                    {Menu.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                    <Route path="/test" component={Test}/>
                    <Route component={Nufound}/>
                </Switch>
            </div>
        )
    }
}

export default Home








