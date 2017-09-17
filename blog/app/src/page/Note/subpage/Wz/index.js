import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let local_accessToken = localStorage.getItem('accessToken') || '';

class Wz extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			setShow:''
		}
	}
    componentDidMount(){
        
	}
	toggle(i){//点击状态
		let {actions} =this.props;
		actions.filterwZ(i);
		let data = {
			id:i,
			accessToken:local_accessToken
		}
		actions.textArticleData(data)
		this.setState({
			setShow:i
		})
	}
	addArticle(i){//新建文章
		let {actions,noteTargetId} = this.props;
		console.log(noteTargetId)
		let data = {
			accessToken:local_accessToken,
			note_id:noteTargetId,
			title:'无标题文章',
			seq_in_nb:i
		}
		console.log(this.props,'刹车')
		actions.addWz(data);
	}
	render(){
		return (
        <div className="wz-n">
			<div className="n-note" onClick={this.addArticle.bind(this,0)}>
				<a href="javascript:void(0)">+新建文章</a>
			</div>
			<ul className="n-notelist">
				{
					this.props.data.length == '0' ? '':
					this.props.data.map((v,i)=>{
						return (
							<li className={this.state.setShow == v.id || (this.state.setShow ==''&& i==0) ? 'active' :''} onClick={this.toggle.bind(this,v.id)} key={i}>
								<a href="javascript:void(0)">
									<span className="left">
										<i></i> 
									</span>
									<span className="right">
										<p className="title">{v.title}{v.id}</p>
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