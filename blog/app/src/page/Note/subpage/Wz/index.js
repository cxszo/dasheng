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
				{
					this.props.data.length == '0' ? '':
					this.props.data.map((v,i)=>{
						return (
							<li className="" key={i}>
								<a href="javascript:void(0)">
									<span className="left">
										<i></i> 
									</span>
									<span className="right">
										<p className="title">{v.title}</p>
										<p className="desc">{v.content}</p>
									</span>
									<cite className="set-ico"></cite>
								</a>
							</li>
						)
					})
				}
			</ul>
			<div className="n-title-new">
				<a href="javascript:void(0)">+在下方新建文章</a>
			</div>
		</div>
		)
	}
}
export default Wz