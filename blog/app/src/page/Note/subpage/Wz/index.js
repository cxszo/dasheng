import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class Wz extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
    componentDidMount(){
        
    }
	render(){
		return (
        <div className="wz-n">
			<div className="n-note">
				<a href="javascript:void(0)">+新建文章</a>
			</div>
			<ul className="n-notelist">
				<li className="active">
					<a href="javascript:void(0)">
						<span className="left">
							 <i></i> 
						</span>
						<span className="right">
							<p className="title">文章标题</p>
							<p className="desc">大家好我是刘志啥初三的</p>
						</span>
						<cite className="set-ico"></cite>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<span className="left">
							<i className="no-select"></i> 
						</span>
						<span className="right">
							<p className="title">文章标题</p>
							<p className="desc">大家好我是刘志啥初三的</p>
						</span>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<span className="left">
							<i className="no-select"></i> 
						</span>
						<span className="right">
							<p className="title">文章标题</p>
							<p className="desc">大家好我是刘志啥初三的</p>
						</span>
					</a>
				</li>
			</ul>
			<div className="n-title-new">
				<a href="javascript:void(0)">+在下方新建文章</a>
			</div>
		</div>
		)
	}
}
export default Wz