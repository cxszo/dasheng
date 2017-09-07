import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Util} from '../../../../util/util.js'
import './index.scss'
class Author extends React.Component{
    constructor(props) {
        super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			gz:false
		}
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
    render(){
     
        return (
            <div>
                <div className="follow-detail">
                    <div className="info">
                        <a className="avatar" href="/u/0fe9f776f37a">
                            <img src={this.props.data.blogger.headimg} alt="144"/>
                        </a>
                             {
                                 this.props.data.is_me == true ? null :
                                <a className={this.props.is_following == false ? 'btn btn-success follow':'btn btn-success follow cur'} onClick={this.attention.bind(this)}><i className="iconfont ic-follow"></i><span>{this.props.is_following  == false ? '+关注':'√ 已关注'}</span></a>
                            }
                        <a className="title" href="/u/0fe9f776f37a">{this.props.data.blogger.name}</a>
                            <i className="iconfont ic-man"></i>
                        <p>被 24226 人关注，获得了 {this.props.data.love} 个喜欢</p>
                        <div className="signature">Powerpoint疯狂爱好者，热爱分享，喜欢写作。关注公众号：PPT达人秀，跟郑少聊点P事。</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Author