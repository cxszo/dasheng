import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import TabF from './subpage/TabF/'
import Introduce from './subpage/Introduce/'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Following extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            islogin:false
        }
    }
    componentDidMount(){
       let {blogloginData,actions} = this.props;
       this.isLogin();//登陆信息
       this.msg();//头部信息
       this.article();//文章列表
       this.followlist();//关注粉丝列表
    }
    msg(){
        let {actions} = this.props;
        let id = this.props.params.id || '';
        let data = {
            accessToken:local_accessToken,
            id:id
        }
        actions.getGuanZhuData(data);
    }
    article(){
        let {actions} = this.props;
        let id = this.props.params.id || '';
        let data = {
            accessToken:local_accessToken,
            or:'love',
            id:id
        }
        actions.getArticleList(data);
    }
    followlist(){
        let {actions} = this.props;
        let id = this.props.params.id || '';
        let data = {
            accessToken:local_accessToken,
            act:'1',
            id:id
        }
        actions.getFollowListData(data);
    }
    loginOut(){//退出登录
        let {actions} = this.props;
        this.setState({
            islogin:false
        })
        actions.clearUserInfo();
    }
    isLogin(){
        let {blogloginData,actions} = this.props;
        //检测登录 有误Token,没有的话去登陆
        if(!!local_accessToken){
            let data = {
                accessToken: local_accessToken
            }
            actions.getLoginData(data);//查询登陆个人信息
            this.setState({
                islogin:true
            })
        }
    }
    render(){
        let {blogloginData,blogGuanZhuData,blogArticleData,followlist,actions} = this.props;
        let Login_data = blogloginData.data || [];
        let msg = blogGuanZhuData.data || [];//头部信息
        // let article = blogArticleData.data || [];
        let follow = followlist.data || [];//关注列表
        return (
            <div>
                <Header isLogin={this.state.islogin} data ={Login_data} loginOut ={this.loginOut.bind(this)} from ={'center'}/>
                <div className="center-wrap">
                    <div className= "left">
                        <Msg data = {msg} actions={actions} id = {this.props.params.id}/>
                       <TabF data ={follow} actions={actions} id ={this.props.params.id}/>
                    </div>
                    <div className='right'>
                        <Introduce data = {msg} id = {this.props.params.id} actions={actions}/>
                    </div>
                </ div>
            </div>
        )
    }
}
export default Following