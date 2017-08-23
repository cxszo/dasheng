import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {article} from '../../../../fetch/Article/'
let txSrc = require('./img/ico-tx.png')
class Article extends React.Component{
	  constructor(props, context) {
        super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data:''
		}
	}
	componentDidMount(){
		article(data=>{
			console.log(data)
			this.setState({
				data:data.data
			})
		})
		
	}
	render(){
		return (
			<div className="blog-list blog-detail"> 
				<div className="blog-detail-title">
					<span>{this.state.data.title}</span>
				</div>
				<div className="blog-detail-contain">
					<div className="blog-detail-msg">
						<span>
							<img src={this.state.data.headimg}/>
						</span>
						<span>
							<p>{this.state.data.bloger}</p>
							<p>
								<em>{this.state.data.createAt}</em>
								<em>阅读{this.state.data.read}</em>
								<em>喜欢{this.state.data.love}</em>
								<em>评论{this.state.data.comment}</em>
							</p>
						</span>
					</div>
					<div className="blog-detail-p">
						<p>{this.state.data.body}</p>
					</div>
				</div>
				<div className = 'detail-comment-box'>
					{/* 发表评论 */}
					<div className="new-comment">
						<a className='touxiang'>
							<img src = {txSrc}/>
						</a>
						<div className="sign-container">
							<a href="" className="btn btn-sign">登录</a> 
							<span>后发表评论</span>
						</div>
					</div>
					<div className="comment">
						<div className="comment-author">
							<div className="author">
								<a>
									<img src={txSrc}/>
								</a>
								<div className="info">
									<p>安娜ing</p>
									<p>7楼 · 2017.08.22 12:33</p>
								</div>
							</div>
							<div className="wrap">
								<p>感觉我就是题主说的那一类人，什么都想学，什么都想要，焦虑症…</p>
								<div className="tool">
									<a>
										<i></i>
										<span>14人点赞</span>
									</a>
									<a>
									<i></i>
										<span>回复</span>
									</a>
								</div>
							</div>
						</div>
						<div className="sub-comment-list">
							<div className="comment-item">
								<p>
									<a></a>
									<span>
										<a></a>
										<img src=''/>
									</span>
								</p>
								<div className="">
									<span>2017.08.22 13:16</span>
									<a>
										<i></i>
										<span>回复</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Article