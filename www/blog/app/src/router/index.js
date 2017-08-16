import  React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Index from '../containers'
import Home from '../containers/Home'
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute component={Home}/>

                </Route>

            </Router>
        )
    }
}
export default RouterMap