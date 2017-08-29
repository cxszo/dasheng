import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Author from '../Author/'
let txSrc = require('./img/ico-tx.png')
class Article extends React.Component{
	  constructor(props, context) {
        super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			
		}
	}
	componentDidMount(){
		
	}
	render(){
		
		return (
			<div>
			{
			this.props.data.length == '' ? null :
			<div className="blog-list blog-detail"> 
				<div className="blog-detail-title">
					<span>{this.props.data.title}</span>
				</div>
				<div className="blog-detail-contain">
					<div className="blog-detail-msg">
						<span>
							<img src={this.props.data.headimg}/>
						</span>
						<span>
							<p>{this.props.data.blogger.name}<a className="gz">+关注</a></p>
							<p>
								<em>{this.props.data.createAt.substring(0,10)}</em>
								<em>阅读{this.props.data.read}</em>
								<em>喜欢{this.props.data.love}</em>
								<em>评论{this.props.data.comment}</em>
								<em>赞赏{this.props.data.comment}</em>
							</p>
						</span>
					</div>
					<div className="blog-detail-p">
						<p>{this.props.data.body}</p>
					</div>
				</div>
				<Author/>
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
									<p>安娜</p>
									<p>7楼 · 2017.08.22 12:33</p>
								</div>
							</div>
							<div className="wrap">
								<p>太精彩的文章。语言干净，内容丰满。有营养。学习了，对沟通，演讲和表达都受益了。太精彩的文章。语言干净，内容丰满。有营养。学习了，对沟通，演讲和表达都受益了。真的好棒！</p>
								<div className="tool">
									<a>
										<i></i>
										<span>14人点赞</span>
									</a>
									<a>
									<i></i>
										<span>6人回复</span>
									</a>
								</div>
							</div>
						</div>
						<div className="sub-comment-list">
							<div className="comment-item">
								<p className="comment-item-desc">
									<a>道长是一名思维贩子</a>
									<span>
										<a>@鞭蓉</a>
										谢谢这么高的评价，这篇文章的确花了些时间。还需要努力，大家都加油！
									</span>
								</p>
								<div className="comment-item-time">
									<span>2017.08.22 13:16</span>
									<a>
										<i></i>
										<em>回复</em>
									</a>
								</div>
							</div>
							<div className="comment-item">
								<p className="comment-item-desc">
									<a>道长是一名思维贩子</a>
									<span>
										<a>@鞭蓉</a>
										谢谢这么高的评价，这篇文章的确花了些时间。还需要努力，大家都加油！
									</span>
								</p>
								<div className="comment-item-time">
									<span>2017.08.22 13:16</span>
									<a>
										<i></i>
										<em>回复</em>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			}
		</div>
		)
	}
}
export default Article