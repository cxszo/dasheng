import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
// import Dropdown from '../Dropdown/'

//配置导航的title
let title  = ['首页'];
//logo地址
let logoSrc = require('./img/logo_03.png');
import {Util} from '../../util/util.js'
class Header extends React.Component{
	constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
           show:false
        }
	}
	show(){
		this.setState({
			show:true
		})
		if(this.state.show){
			this.setState({
				show:false
			})
		}
	}
	toWrite(i){//写文章先检测是否登录
		let accessToken = localStorage.getItem('accessToken') || '';
		if(accessToken){
			hashHistory.push('/Note');
		}else{
			hashHistory.push('/Sign/0');
		}
	}
	toIndex(){//回到主页
		hashHistory.push('/');
	}
	toSigIn(i){//去登陆
		hashHistory.push('/Sign/'+i+'');
	}
	toSigUp(i){//去注册
		hashHistory.push('/Sign/'+i+'')
	}
	toCenter(e){//我的主页
        let user_id = this.props.data.user_id;
        hashHistory.push("/Center/"+user_id);
    }
    loginOut(){//退出
		localStorage.removeItem('accessToken');
		if(this.props.from == 'detail' || this.props.from == 'center'){//在个人中心,详情里退出直接跳转到首页
			hashHistory.push('/')
		}
		this.setState({
			show:false
		});
		this.props.loginOut();
    }
	render(){
		return (
			<div className = "header">
				<div className = "header-content">
					<div className="logo">
						<a href="">
							{/* <img src={logoSrc} alt=""/> */}
						</a>
					</div>
					<div className="nav">
						<ul>
							{
								title.map((v,i)=>{
									return (
										<li key={i} className="cur">
											<a onClick={this.toIndex.bind(this)}>{v}</a>
										</li>
									)
								})
							}
						</ul>
					</div>
					{
						this.props.isLogin == false ? 
						<div className="login-count">
							<ul>
								<li>
									<a onClick={this.toSigIn.bind(this,'0')}>登录</a>
									<a onClick={this.toSigUp.bind(this,'1')}>注册</a>   
								</li>
								
							</ul>
						</div>
						:
						<div className="count2" onClick={ this.show.bind(this)}>
							<a  className="count2-msg"><img src={this.props.data.headimg} alt=""/></a>
							<div>
								<div className ={this.state.show ? "drop" : 'drop hide'}>
										<ul>
											<li>
												<a onClick ={this.toCenter.bind(this)}>
													<cite></cite>
													我的主页
												</a>
											</li>
											<li>
												<a>
												<cite></cite>
													收藏文章
												</a>
											</li>
											<li>
												<a>
												<cite></cite>
													设置
												</a>
											</li>
											<li onClick={this.loginOut.bind(this)}>
												<a>
												<cite></cite>
													退出
												</a>
											</li>
										</ul>
									</div>
								</div>
						</div>
					}	
					<div className="search">
						<input placeholder="搜索大圣"/>
						<img src="https://gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt=""/>
					</div>
					<div className = 'edit'>
						<a onClick={this.toWrite.bind(this,this.props.data.user_id)}>写文章</a>
					</div>
				</div>
			</div>
		)
	}
}
export default Header