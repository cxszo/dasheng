



import React, { Component, PropTypes } from 'react';



class Sign_in extends Component{

    static propTypes = {
        handle: PropTypes.func
    }
    constructor(props){
        super(props)
        this.state = {
            account: '',
            password: ''
        }
    }
    render(){
        let { code, data, desc} = this.props.msg || '';
        let { account, password } = this.state;
        return (
            <div className="view view-signin selected" data-za-module="SignInForm" ref="myInput">
                <div className="group-inputs">
                    <div className="account input-wrapper">

                        <input type="text" name="account" placeholder="手机号或用户名" required="" value={account} onInput={v=>this.setState({account: v.target.value})} />
                    </div>
                    <div className="verification input-wrapper">
                        <input type="password" name="password" placeholder="密码" required="" value={password} onInput={v=>this.setState({password: v.target.value})} />
                    </div>
                </div>
                <div className="button-wrapper command">
                    <button className="sign-button" id="signin" onClick={this.props.handle.bind(null, account, password)}>登录</button>
                </div>
                <div className="signin-misc-wrapper clearfix">
                    <button type="button" className="signin-switch-button">手机验证码登录</button>
                    <a className="unable-login" href="#">无法登录？</a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.refs.myInput.onkeydown = (event)=> {
            var e = event || window.event;
            if (e && e.keyCode == 13) {
                let { account, password } = this.state;
                this.props.handle(account, password)
            }
        }; 
    }
}

export default Sign_in