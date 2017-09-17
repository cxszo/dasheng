

import React, {PureComponent} from 'react'
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {connect} from "react-redux";
const { Content } = Layout;



import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import Home from './home'


class App extends PureComponent{
  constructor(props){
      super(props)
  }
  state ={
    collapsed: true
  }
  render(){

      let match = this.props.match;
      console.log(this.props.side)
      let sideState = this.props.side;
      return(
        <Router>
          <Layout>
            <SideMenu />
            <Layout style={{ marginLeft: `${sideState?'64px':'200px'}`, transition: 'margin-left .2s' }}>
              <Header />
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                  <Route path="/" component={Home}/>
                </div>
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Router>
      )
  }
  componentWillMount(){

  }
}

export default connect(
  ({Side}) => {
    return {
      side: Side.data
    }
  }
)(App)
