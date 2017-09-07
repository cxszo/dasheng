import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import {Util} from '../../../../util/util.js'
class Like extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            turnoff : false,
            islogin: false
        }

    }
    handler(){
        let {actions} = this.props;
        //检测登录
        if(Util.isLogin()){
            this.setState({
                islogin:true
            })
        }
        let data = {id:this.props.id};//订单ID
        let _data = Object.assign({},data,Util.isLogin());//组装订单id和accessToken
        actions.getLike(_data);//触发接口
       
        actions.getLoveList(data);//喜欢列表
    }
    componentDidMount(){
      
    }
    componentWillReceiveProps(nextProps){
        //默认去详情接口的是否喜欢状态
       let is_love = nextProps.is_love;
        if(is_love == true){
            this.setState({
                turnoff:true
            })
        }else{
            this.setState({
                turnoff:false
            })
        }
    }
    handlerShow(){
        let {actions} = this.props;
        actions.getLove(true);//显示喜欢列表
      
    }
    render(){
        return (
            <div className="like-box">
            <div className="like">
                <div className={this.state.turnoff == true ? 'btn like-group cur' :'btn like-group'}>
                    <div className="btn-like">
                        <a onClick={this.handler.bind(this)}>
                            <i className="iconfont ic-like"></i>喜欢
                        </a>
                    </div> 
                    <div className="modal-wrap" onClick={this.handlerShow.bind(this)}>
                        <a>{this.props.love}</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Like