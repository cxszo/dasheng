import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
class BlogHot extends React.Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount(){
		
	}
	render(){
		return (
			<div className="bloghot">
				<div className="bloghot-content">
					<p>热门标签</p>
					<ul>
						{
							this.props.data.length == 0 ? null :
							this.props.data.map((v,i)=>{
								return (
									<li key ={i}><a href="">{v.name}</a></li>
								)
							})
						}
						
					</ul>
				</div>
			</div>
		)
	}
}
export default BlogHot