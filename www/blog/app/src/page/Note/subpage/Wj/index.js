import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class Wj extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
    componentDidMount(){
        
    }
	render(){
		return (
        <div className="wj">
            <div className="home-wrap">回到首页</div>
            <div className="new-notebook">新建文集</div>
            <ul>
                <li>随笔</li>
                <li>日记本</li>
            </ul>
            <div className="commercial">回收站</div>
        </div>
		)
	}
}
export default Wj