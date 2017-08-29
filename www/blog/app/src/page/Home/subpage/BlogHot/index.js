import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
class BlogHot extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			turnOff:100
        }
		
	}
	componentDidMount(){
		
	}
	handleClick(i){
		let data = {
			tag_item:i
		}
		this.setState({
			turnOff:i
		})
		let {actions} = this.props;
		actions.getListData(data);
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
									<li key ={i} onClick={this.handleClick.bind(this,i)} className={i==this.state.turnOff?'cur':''}><a>{v.name}</a></li>
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