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
						<li><a>开源</a></li>
						<li><a>算法</a></li>
						<li><a>GitHub</a></li>
						<li><a>面试</a></li>
						<li><a>代码规范</a></li>
						<li><a>产品</a></li>
						<li><a>翻译计划</a></li>
					</ul>
				</div>
			</div>
		)
	}
}
export default BlogHot