
import './index.scss'

import React from 'react';
import { Menu, Dropdown, message, Spin } from 'antd';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

const logo = require('./img/logo_03.png')


class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){


        let { isLoading, code, data } = this.props.data || '';
        let { user_id, headimg, username, callphone } = data || '';
        return (
            <div className="header"> 
                <div className="header-container clear-fix">
                    <div className="logo float-left">
                        <Link to="/"><img src={`${logo}`} title="大圣" /></Link>
                    </div>
                    {do{
                        if( isLoading ){
                            <div className="userinfo float-right">
                                <Spin />
                            </div>
                        }else if(code == '1'){
                            <div className="userinfo float-right">
                                <Dropdown overlay={this.menu}>
                                    <div className="ui_div"><img src={headimg} />{username}</div>
                                </Dropdown>
                            </div>
                        }else{
                            <div className="sign_handle float-right">
                                <Link to="/sign_in">登录</Link>
                                /
                                <Link to="/sign_up">注册</Link>
                            </div>
                        }
                    }}
                    <div className="nav">
                        <ul>
                            <li>
                                <a href="http://blog.9188.group" target="_blank">博客平台</a>
                            </li>
                            <li>
                                <a href="http://admin.9188.group" target="_blank">后台</a>
                            </li>
                            <li>
                                <a href="http://cdn.9188.group" target="_blank">9188静态资源公共库</a>
                            </li>
                            <li>
                                <a href="http://doc.9188.group" target="_blank">接口文档</a>
                            </li>
                                {/* <li>
                                <a href="/">公司形象</a> 
                            </li>
                            <li>
                                <a href="/">项目管理</a> 
                            </li>
                            <li>
                                <a href="/">前端小工具集合</a> 
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){

    }

    onClick({ key }) {
        if(key == '3'){
            this.props.loginOut();
        }else{
            message.warning('还没开发完成');
        }
    };
    
    menu = (
        <Menu onClick={this::this.onClick}>
          <Menu.Item key="0">
            个人主页
          </Menu.Item>
          <Menu.Item key="1">
            设置
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">退出登录</Menu.Item>
        </Menu>
    )
}



export default Home