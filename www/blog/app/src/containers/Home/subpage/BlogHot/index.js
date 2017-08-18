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
				热门
			</div>
		)
	}
}
export default BlogHot