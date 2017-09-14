
import './index.scss'

import React, { Component } from 'react';
import {connect} from "react-redux";
import { message } from 'antd';

import Header from '../../components/Header'

import Worker from './subpage/Worker'
import Banner from './subpage/Banner'
import Famliyer from './subpage/Famliyer'
import Footer from './subpage/Footer'

import { TOKEN } from '../../constant/local'

import { getUserInfo, clearUserInfo } from '../../actions/sign'

class Home extends Component{

    // static propTypes = {
    //     userinfo: PropTypes.object.isRequired,
    // }

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className="home"> 
                <Header data={this.props.userinfo} loginOut={this::this.loginOut} />
                <Banner />
                <Worker />
                <Famliyer />
                <Footer />
            </div>
        )
    }
    componentWillMount(){
        if(localStorage[TOKEN]){
            this.props.getUserInfo()
        }

    }
    componentDidMount(){

        
    }
    shouldComponentUpdate(nextProps) {
        return true;
        // return nextProps.entries !== this.props.entries;
    }
    loginOut(){
        localStorage.setItem(TOKEN, '')
        this.props.clearUserInfo();
        message.success(`成功退出`);
    }
}

export default connect(
    ({Sign}) => {
      return {
        userinfo: Sign.userinfo
      }
    },
    {getUserInfo, clearUserInfo}
)(Home)

