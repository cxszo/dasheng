import './static/css/common.scss'
import React from 'react'
import { render } from 'react-dom'
import RouteMap from './router'
import { hashHistory, browserHistory } from 'react-router'
import initReactFastclick from 'react-fastclick';

initReactFastclick();

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)
