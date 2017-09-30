import './index.scss'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import React from 'react';
let logo = require('../img/sign_logo.png');
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            account: '',
            password: ''
        }
    }
    login(){//登录
        let {actions,code} = this.props;
        let password = this.state.password;
        let data = {
            username:this.state.account,
            password:btoa(password)
        }
        actions.signInData(data);
    }
    render(){
        let {actions,code} = this.props;
        if(code == '1'){
            hashHistory.push('/Home')
        }
        return (  
                <div className="sign-contain">
                    <div className="input-prepend restyle js-normal">
                        <input placeholder="手机号或邮箱" type="text" onInput={v=>this.setState({account: v.target.value})}/>
                        <i className="iconfont ic-user"></i>
                    </div>
                    <div className="input-prepend">
                        <input placeholder="密码" type="password" onInput={v=>this.setState({password: v.target.value})}/>
                        <i className="iconfont ic-password"></i>
                    </div>
                    <div className="remember-btn">
                        <span>记住我</span>
                        <cite>登录遇到问题?</cite>
                    </div>
                    <div className="submitBtn">
                        <input type="submit" name="commit" value="登录" className="sign-in-button" onClick={this.login.bind(this)}/>
                    </div>
                </div>
        )
    }
}
export default SignIn