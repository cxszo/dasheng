

import './index.scss'


import React, {PureComponent} from 'react'
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { Header:Head, Content, Sider } = Layout;
const { SubMenu } = Menu

class Header extends PureComponent{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div className="ant-layout-header">
                <Menu className="header-menu" mode="horizontal">
                    {this.userMenu}
                </Menu>
            </div>
        )
    }
    componentWillMount(){

        const userMenu = (
        <SubMenu title={<span><Icon type="user" />齐天大圣</span>}>
            <SubMenu key='1' title={<span><Icon type="tag" />修改用户信息</span>}>
                
            </SubMenu>
            <Menu.Divider />
            <Menu.Item key="4">
                <Icon type="logout"/>
                <span>注销</span>
            </Menu.Item>
        </SubMenu>
        );

        this.userMenu = userMenu;
    }

}

export default Header
