import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {blogtag} from '../../../../fetch/BlogTag/'
class BlogHot extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			hotTitle:[]
		}
	}
	componentDidMount(){
		blogtag(tag =>{
			this.setState({
				hotTitle:tag.data[0].subset
			})
		})
	}

	render(){
		return (
			<div className="bloghot">
				<div className="bloghot-content">
					<p>热门标签</p>
					<ul>
						{
							this.state.hotTitle.length == 0 ? null :
							this.state.hotTitle.map((v,i)=>{
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