import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title
let title  = ['首页','专栏','收藏集','发现'];
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
										<li key={i}>
											<a href={i}>{v}</a>
										</li>
									)
								})
							}
						</ul>
					</div>
					<div className="login-count" style={{display:'none'}}>
						<ul>
							<li>
								<a href="../../sign_in.html">登录</a>
								/
								<a href="../../sign_in.html">注册</a>
							</li>
							
						</ul>
					</div>
					<div className="count2">
						<img src='https://dn-mhke0kuv.qbox.me/gDKsHYPSIAdunI1Xzbv7IAE?imageView2/1/w/100/h/100/q/85/interlace/1' alt=""/>
						
					</div>
					<div className="search">
						<input placeholder="搜索大圣"/>
						<img src="https://gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt=""/>
					</div>

				</div>
			</div>
		)
	}
}
export default Header