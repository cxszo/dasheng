import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import Index from '../page'
import Blog from '../container/Home'
import Detail from '../container/Detail'
import Center from '../container/Center/index'
import Following from '../container/Center/following'
import Followers from '../container/Center/followers'
import Likes from '../container/Center/Likes'
import Note from '../container/Note/index'
import Recycle from '../container/Note/recycle'
import Sign from '../container/Sign/index'
// import SignIn from '../page/Sign/subpage/signIn.js'
// import SignUp from '../page/Sign/subpage/signUp.js'
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute component={Blog}/>
                    <Route path='/Home' component={Blog}/>
                    <Route path='/Detail/:id' component={Detail}/>
                    <Route path='/Center/:id' component={Center}/>
                    <Route path='/Center/:id/Following' component={Following}/>
                    <Route path='/Center/:id/followers' component={Followers}/>
                    <Route path='/Center/:id/likes' component={Likes}/>
                    <Route path='/Note' component={Note}/>
                    <Route path='/Recycle' component={Recycle}/>
                    <Route path='/Sign/:id' component={Sign}/>
                                 
            	</Route>
            </Router>
        )
    }
}
export default RouterMap