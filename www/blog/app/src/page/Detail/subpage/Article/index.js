import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Author from '../Author/'
import Like from '../Like/'
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
				<Author data = {this.props.data}/>
				{/* <Like data = {this.props.data} actions = {this.props.actions} id={this.props.id}/> */}
				
			</div>
			}
		</div>
		)
	}
}
export default Article