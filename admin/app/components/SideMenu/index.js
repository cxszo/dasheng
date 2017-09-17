
import './index.scss'

import React, {PureComponent} from 'react'
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import { Layout, Menu, Icon, Breadcrumb,Button } from 'antd';
import {connect} from "react-redux";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
import { setSide } from '../../actions/side'

class SideMenu extends PureComponent{
    // constructor(props){
    //     super(props)
    // }
    state = {
        mode: 'inline',//vertical
        theme: 'dark',//light
    };
    onCollapse = (collapsed) => {
        this.props.setSide(collapsed)
    }
    render(){
        let sideState = this.props.side;
        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
            collapsible
            collapsed={sideState}
            onCollapse={this.onCollapse}
            >
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={sideState}
                >
                    <Link to='/'>
                        <div className="admin-logo">
                            <img src={require('./img/logo_03.png')} />
                            <span>大圣网后台</span>
                        </div>
                    </Link>
                    <Menu.Item key="1">
                        <Link to='/userinfo'>
                            <Icon type="apple" />
                            <span className="nav-text">iphoneX</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>主站</span></span>}>
                        <SubMenu key="sub11" title={<span><Icon type="user" /><span>用户</span></span>}>
                        <Menu.Item key="2">
                            <Link to='/userinfo'>
                                <span className="nav-text">用户列表</span>
                            </Link>
                        </Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="book" /><span>博客</span></span>}>
                        <Menu.Item key="3">
                            <Link to='/test'>
                                <span className="nav-text">页面一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to='/test'>
                                <span className="nav-text">页面一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to='/test'>
                                <span className="nav-text">页面一</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>三级测试</span></span>}>
                        <Menu.Item key="9">
                            <Link to='/test'>
                                <span className="nav-text">页面一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Link to='/test'>
                                <span className="nav-text">页面一</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub31" title={<span><Icon type="github" /><span>三级测试</span></span>}>
                        <Menu.Item key="11">
                            <Link to='/test'>
                                <span className="nav-text">页面一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Icon type="inbox" />
                            <span>页面四</span>
                        </Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default connect(
    ({Side}) => {
      return {
        side: Side.data
      }
    },{setSide}
)(SideMenu)