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
        <div className="wj-n">
            <div className="home-wrap">
                <a>回到首页</a>
            </div>
            <div className="new-notebook">
                <a>+新建文集</a>
            </div>
            <ul className="note-bookes">
                <li>
                    <a href="javascript:void(0)" className="active">随笔<i></i></a>
                </li>
                <li>
                    <a href='javascript:void(0)'>日记本</a>
                </li>
            </ul>
            <div className="commercial">
                <a>
                    <i></i>
                    回收站
                </a>
            </div>
        </div>
		)
	}
}
export default Wj