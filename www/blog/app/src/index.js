import './static/css/common.scss'
import React from 'react'
import { render } from 'react-dom'
import RouteMap from './router'
import {Provider} from 'react-redux'
import { hashHistory, browserHistory } from 'react-router'
import store from './store/index.js'
import initReactFastclick from 'react-fastclick';

initReactFastclick();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>, document.getElementById('root')
)
