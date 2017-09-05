import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import TabL from './subpage/TabL/'
import Introduce from './subpage/Introduce/'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Likes extends React.Component{
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
       this.collect();//收藏文章
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
    collect(){
        let {actions} = this.props;
        let id = this.props.params.id || '';
        let data = {
            accessToken:local_accessToken,
            or:'love',
            id:id
        }
        actions.getCollectList(data);
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
        let {blogloginData,blogGuanZhuData,blogArticleData,collectList,actions} = this.props;
        let Login_data = blogloginData.data || [];
        let msg = blogGuanZhuData.data || [];//头部信息
        let collect = collectList.data || [];//收藏列表
        return (
            <div>
                <Header isLogin={this.state.islogin} data ={Login_data}/>
                <div className="center-wrap">
                    <div className= "left">
                       <Msg data = {msg}/>
                       <TabL data ={collect} actions={actions}/>
                    </div>
                    <div className='right'>
                        <Introduce data = {msg} id = {this.props.params.id} actions={actions}/>
                    </div>
                </ div>
            </div>
        )
    }
}
export default Likes