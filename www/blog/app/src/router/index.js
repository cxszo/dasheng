import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import Index from '../page'
import Blog from '../container/Home'
import Detail from '../page/Detail'
import Center from '../page/Center'
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute component={Blog}/>
                    <Route path='/Home' component={Blog}/>
                    <Route path='/Detail/:id' component={Detail}/>
                    <Route path='/Center' component={Center}/>
            	</Route>
            </Router>
        )
    }
}
export default RouterMap