import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
class BlogHot extends React.Component{
	constructor(props) {
		super(props);
		this.state={

		}
	}
	toSrc(){
		hashHistory.push("/Detail/1234")
	}
	render(){
		return (
			<div className="bloghot">
				<div className="bloghot-content">
					<p>热门标签</p>
					<ul>
						<li><a>架构</a></li>
						<li><a>架构</a></li>
						<li><a>架构</a></li>
						<li><a>架构</a></li>
						<li><a>架构</a></li>
						<li><a>架构</a></li>
						
					</ul>
				</div>
			</div>
		)
	}
}
export default BlogHot