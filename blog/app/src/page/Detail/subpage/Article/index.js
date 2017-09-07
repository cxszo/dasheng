import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Author from '../Author/'
import Like from '../Like/'
import {Util} from '../../../../util/util.js'
let txSrc = require('./img/ico-tx.png')
class Article extends React.Component{
	  constructor(props) {
        super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			gz:false
		}
	}
	componentDidMount(){
		
	}
	attention(){
		let {actions} =this.props;
		//检测登录
		if(Util.isLogin()){
            this.setState({
                islogin:true
            })
		}
		let data_U={//博主Id
			id:this.props.data.blogger.id
		};
		let data_A ={//文章id
			id:this.props.id
		};
		let U_data = Object.assign({},data_U,Util.isLogin());//关注
		let A_data = Object.assign({},data_A,Util.isLogin());//详情
		actions.getGz(U_data);//点击关注或者取消
		actions.getDetailData(A_data);//详情信息
	}
	componentWillReceiveProps(nextProps){
        //默认去详情接口的是否关注
	   let is_following = nextProps.is_following;

        if(is_following == true){
            this.setState({
                gz:true
            })
        }else{
            this.setState({
                gz:false
            })
        }
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
							<img className="ico-detail" src={this.props.data.blogger.headimg}/>
						</span>
						<span>
							<p>{this.props.data.blogger.name}
								{
								this.props.data.is_me == true ? null :
								<a className={this.state.gz == false ? 'gz':'gz cur'} onClick={this.attention.bind(this)}>{this.state.gz == false ? '+关注':'√ 已关注'}</a>
								}
							</p>
							<p>
								<em>{this.props.data.createAt}</em>
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
				<Author data = {this.props.data} id ={this.props.id} actions={this.props.actions} is_following={this.props.is_following}/>				
			</div>
			}
		</div>
		)
	}
}
export default Article