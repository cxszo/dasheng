import'./index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

let local_accessToken = localStorage.getItem('accessToken') || '';
let logo = require('./img/sign_logo.png');
import SignIn from './subpage/signIn.js'
import SignUp from './subpage/signUp.js'
class Sign extends React.Component{
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);		
		this.state={
           off:true
		}
    }
	render(){
        let {SignInCode,SignInData,SignInDesc,SignUpCode,SignUpData,SignUpDesc,actions} = this.props;
        //登录
        if(SignInCode == '1'){
            let accessToken = SignInData.accessToken;
            localStorage.setItem('accessToken',accessToken); 
            alert(SignInDesc);
        }
        //注册
        if(SignUpCode == '1'){
            let accessToken = SignUpData.accessToken;
            localStorage.setItem('accessToken',accessToken); 
            alert(SignUpDesc);
        }
       
		return (
            <div className="signIn">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <div className="signIn-main">
                    <h4 className='title'>
                        <div className="normal-title">
                            <a onClick={()=>{this.setState({off:true})}} className={this.state.off ? 'active':''}>登录</a>
                            <b>·</b>
                            <a onClick={()=>{this.setState({off:false})}} className={!this.state.off ? 'active':''}>注册</a>
                        </div>
                     </h4>
                    {
                        this.state.off ?  
                        <SignIn actions={actions} code={SignInCode}/> 
                        :
                        <SignUp actions={actions} code={SignUpCode}/>
                    }   
                </div>
               
            </div>
        )
	}
}
export default Sign