import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title
let title  = ['首页'];
//logo地址
let logoSrc = require('./img/logo_03.png');
class Header extends React.Component{
	constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
           
        }
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
											<a href={i}>{v}</a>
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
						<div className="count2">
							<a><img src='http://upload.jianshu.io/users/upload_avatars/1717877/aa3777f3ee0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120' alt=""/></a>
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