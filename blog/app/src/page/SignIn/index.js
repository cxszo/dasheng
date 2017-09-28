import React from 'react'
import './index.scss'
class SignIn extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="signIn">
                <div className="sign-main-body">
                    <div className="index-header">
                        <a className="" href="/">
                            <h1 className="logo hide-text"></h1>
                        </a>
                        <h2 className="subtitle">一入前端深似海，从此红尘陌路人</h2>
                    </div>
                    <div className="sign-flow">
                        <div className="index-tab-navs">
                            <div className="navs-slider" data-active-index="1">
                                <a className="" href="">注册</a>
                                <a className="active" href="">登录</a>
                                <span className="navs-slider-bar"></span>
                            </div>
                        </div>
                        <div className="view view-signin selected" data-za-module="SignInForm">
                            <div className="group-inputs">
                                <div className="account input-wrapper">
                                    <input type="text" name="account" placeholder="手机号或用户名" value="刘志山"/>
                                </div>
                                <div className="verification input-wrapper">
                                    <input type="password" name="password" placeholder="密码" value="123456"/>
                                </div>
                            </div>
                            <div className="button-wrapper command">
                                <button className="sign-button" id="signin">登录</button>
                            </div>
                        </div>
                    </div>
               </div>      
            </div>
        )
    }
}
export default SignIn