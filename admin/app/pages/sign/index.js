
import './index.scss'

import React from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { message } from 'antd';


import Sign_in from './subpage/sign_in'
import Sign_up from './subpage/sign_up'

import { goLogin, goRegister } from '../../actions/sign'
import { TOKEN } from '../../constant/local'

class Sign extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        let {type} = this.props.match.params || '';

        let { loginInfo, registerInfo } = this.props;
        let {code, data, desc} = loginInfo || '';
        let {code:code1, data:data1, desc:desc1} = registerInfo || ''
        if(code == '1'){
            
            localStorage.setItem(TOKEN, data.accessToken)

            const location = {
                pathname: '/'
            }
            this.props.history.replace(location)
            message.success(desc)
        }
        if(code1 == '1'){

            localStorage.setItem(TOKEN, data1.accessToken)
            
            const location = {
                pathname: '/'
            }
            this.props.history.replace(location)
            message.success(desc)
        }
        return (
            <div className="sign-main"> 
                <div className="sign-main-body">
                    <div className="index-header">
                        <Link to="/" className={type == 'up'?'active':''}><h1 className="logo hide-text"></h1></Link>
                        <h2 className="subtitle">一入前端深似海，从此红尘陌路人</h2>
                    </div>

                    <div className="sign-flow">
                        <div className="index-tab-navs">
                            <div className="navs-slider" data-active-index={type == 'up'?'0':'1'}>
                                <Link to="/sign_up" replace className={type == 'up'?'active':''}>注册</Link>
                                <Link to="/sign_in" replace className={type == 'in'?'active':''}>登录</Link>
                                <span className="navs-slider-bar"></span>
                            </div>
                        </div>
                        {do{
                            if(type == 'in'){
                                <Sign_in handle={this::this.signIn} msg={this.props.loginInfo} />
                            }else{
                                <Sign_up handle={this::this.signUp} msg={this.props.registerInfo} />
                            }
                        }}
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){

    }

    //点击登录
    signIn(account = '', password = ''){
        this.props.dispatch(goLogin({account, password}))
    }
    
    //点击注册
    signUp(username = '', callphone = '', password = ''){
        this.props.dispatch(goRegister({username, callphone, password}))
    }

}




function select({ Sign:{loginInfo, registerInfo} }) {
    return { loginInfo, registerInfo }
}
export default connect(select)(Sign);