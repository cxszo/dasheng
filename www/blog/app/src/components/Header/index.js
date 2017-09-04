import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Dropdown from '../Dropdown/'

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
	toIndex(){
		hashHistory.push('/')
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
									<a href="http://10.0.10.171:8081/sign_in">登录</a>
									<a href="http://10.0.10.171:8081/sign_up">注册</a>   
								</li>
								
							</ul>
						</div>
						:
						<div className="count2" onClick={ this.show.bind(this)}>
							<a  className="count2-msg"><img src={this.props.data.headimg} alt=""/></a>
							<Dropdown show = {this.state.show} user_id ={this.props.data.user_id}/>
						</div>
					}	
					<div className="search">
						<input placeholder="搜索大圣"/>
						<img src="https://gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt=""/>
					</div>
					<div className = 'edit'>
						<a>写文章</a>
					</div>
				</div>
			</div>
		)
	}
}
export default Header