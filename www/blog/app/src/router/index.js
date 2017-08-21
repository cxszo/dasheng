import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Index from '../containers'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute component={Home}/>
                    <Route path='/Home' component={Home}/>
                    <Route path='/Detail/:id' component={Detail}/>
            	</Route>
            </Router>
        )
    }
}
export default RouterMap