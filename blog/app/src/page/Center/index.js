import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import Tab from './subpage/Tab/'
import Introduce from './subpage/Introduce/'

class Center extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            islogin:false
        }
    }
    componentDidMount(){
       let {blogloginData,actions} = this.props;
       this.isLogin();//登陆信息
       this.msg(this.props);//头部信息
       this.article(this.props);//文章列表
    }
    componentWillReceiveProps(nextProps){
        let pathName_1 = this.props.location.pathname || '';
        let pathName_2 = nextProps.location.pathname || '';
        if(pathName_1 !=pathName_2){
           this.isLogin(nextProps);//登陆信息
           this.msg(nextProps);//头部信息
           this.article(nextProps);//文章列表
        }
	}
    msg(param){
        let local_accessToken = localStorage.getItem('accessToken') || '';
        let {actions} = param;
        let id = param.params.id || '';
        let data = {
            accessToken:local_accessToken,
            id:id
        }
        actions.getGuanZhuData(data);
    }
    article(param){
        let local_accessToken = localStorage.getItem('accessToken') || '';
        let {actions} = param;
        let id = param.params.id || '';
        let data = {
            accessToken:local_accessToken,
            or:'love',
            id:id
        }
        actions.getArticleList(data);
    }
    isLogin(){//检测登录
        let {blogloginData,actions} = this.props;
        //检测登录 有误Token,没有的话去登陆
        let local_accessToken = localStorage.getItem('accessToken') || '';
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
    loginOut(){//退出登录
        let {actions} = this.props;
        this.setState({
            islogin:false
        })
        actions.clearUserInfo();
    }
    render(){
        let {blogloginData,blogGuanZhuData,blogArticleData,actions} = this.props;
        let Login_data = blogloginData.data || [];
        let msg = blogGuanZhuData.data || [];//头部信息
        let article = blogArticleData.data || [];//文章列表
        return (
            <div>
                <Header isLogin={this.state.islogin} data ={Login_data} loginOut ={this.loginOut.bind(this)} from ={'center'} />
                <div className="center-wrap">
                    <div className= "left">
                       <Msg data = {msg} actions={actions} id = {this.props.params.id}/>
                       <Tab data ={article} actions={actions} id ={this.props.params.id}/>
                    </div>
                    <div className='right'>
                        <Introduce data = {msg} id = {this.props.params.id} actions={actions}/>
                    </div>
                </ div>
            </div>
        )
    }
}
export default Center