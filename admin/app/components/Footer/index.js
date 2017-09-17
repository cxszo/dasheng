
import './index.scss'

import React, {PureComponent} from 'react'
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { Header, Content, Footer:Foot, Sider } = Layout;


class Footer extends PureComponent{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <Foot style={{ textAlign: 'center' }}>
                dasheng ©2017 Created by wangwei
            </Foot>
        )
    }

}

export default Footer
