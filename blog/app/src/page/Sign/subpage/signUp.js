 import './index.scss'
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let logo = require('../img/sign_logo.png');
class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            callphone: '',
            password:''
        }
    }
    sign(){//登录
        let {actions,code} = this.props;
        let password = this.state.password;
        let data = {
            username:this.state.username,
            callphone:this.state.callphone,
            password:btoa(password)
        }
        actions.signUpData(data);
    }
    render(){
        let {actions,code} = this.props;
        if(code == '1'){
            hashHistory.push('/Home')
        }
        return (
            <div className="sign-contain">
                <div className="input-prepend restyle js-normal">
                    <input placeholder="你的昵称" type="text" name="session[email_or_mobile_number]"  onInput={v=>this.setState({username: v.target.value})}/>
                    <i className="iconfont ic-user"></i>
                </div>
                <div className="input-prepend restyle">
                    <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]"  onInput={v=>this.setState({callphone: v.target.value})}/>
                    <i className="iconfont ic-user"></i>
                </div>
                <div className="input-prepend">
                    <input placeholder="密码" type="password" name="session[password]" id="session_password"  onInput={v=>this.setState({password: v.target.value})} />
                    <i className="iconfont ic-password"></i>
                </div>
                <div className="remember-btn">
                    
                </div>
                <div className="submitBtn">
                    <input type="submit" name="commit" value="注册" className="sign-in-button" data-disable-with="注册"  style={{'background':'#42c02e'}} onClick={this.sign.bind(this)}/>
                </div>
            </div>
           
        )
    }
}
export default SignUp