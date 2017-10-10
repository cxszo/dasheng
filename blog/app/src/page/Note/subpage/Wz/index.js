import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let local_accessToken = localStorage.getItem('accessToken') || '';

class Wz extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			setShow:'',
			setBtn:false//是否显示设置按钮
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
		let data = {
			accessToken:local_accessToken,
			note_id:noteTargetId,
			title:'无标题文章',
			seq_in_nb:i
		}
		actions.addWz(data);
	}
	setHandler(i){
		this.setState({
			setBtn:true
		})
		if(this.state.setBtn == true){
			this.setState({
				setBtn:false
			})
		}
	}
	delArticle(i){
		let {actions} = this.props;
		this.setState({
			setBtn:false
		})
		let data = {
			id:i,
			accessToken:local_accessToken
		}
		actions.delArticleData(data);
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
										<p className="title">{v.title}</p>
										<p className="desc">{v.content.replace(/<\/?[^>]*>/g,'')}</p>
									</span>
									<cite className="set-ico" onClick={this.setHandler.bind(this,v.id)}></cite>
								</a>
								{
									this.state.setShow == v.id ? 
									<ul className={this.state.setBtn?'dropdown-menu':' dropdown-menu hide'}>
										<li onClick={this.delArticle.bind(this,v.id)}>
											<cite></cite>
											删除文章
										</li>
								</ul>
								:''
								}
							</li>
						)
					})
				}
			</ul>
			<div className="n-title-new">  
				<a href="javascript:void(0)" onClick={this.addArticle.bind(this,1)}>+在下方新建文章</a>
			</div>
		</div>
		)
	}
}
export default Wz