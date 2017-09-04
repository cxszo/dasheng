import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import TabFS from './subpage/TabFS/'
import Introduce from './subpage/Introduce/'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Followers extends React.Component{
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
        }else{
            this.setState({
                islogin:false
            })
        }
    }
    render(){
        let {blogloginData,blogGuanZhuData,blogArticleData,actions} = this.props;
        let Login_data = blogloginData.data || [];
        let msg = blogGuanZhuData.data || [];//头部信息
        let article = blogArticleData.data || [];//文章列表
        return (
            <div>
                <Header isLogin={this.state.islogin} data ={Login_data}/>
                <div className="center-wrap">
                    <div className= "left">
                       <Msg data = {msg}/>
                       <TabFS data ={article} actions={actions}/>
                    </div>
                    <div className='right'>
                        <Introduce id = {this.props.params.id}/>
                    </div>
                </ div>
            </div>
        )
    }
}
export default Followers