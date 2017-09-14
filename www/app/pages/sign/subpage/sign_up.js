



import React, {Component, PropTypes} from 'react'

class Sign_up extends Component{
    static propTypes = {
        handle: PropTypes.func,
    }
    constructor(props){
        super(props)
        this.state = {
            username: '',
            callphone: '',
            password:''
        }
    }
    render(){
        let { username, callphone, password } = this.state;
        return (
            <div className="view view-signup selected" ref="myInput">
                <div className="zu-side-login-box">
                    <div className="group-inputs">
                        <div className="name input-wrapper">
                            <input type="text" name="username" placeholder="姓名" value={username} onInput={v=>this.setState({username: v.target.value})} />
                        </div>
                        <div className="email input-wrapper">
                            <input type="text" className="account" name="callphone" placeholder="手机号" value={callphone} onInput={v=>this.setState({callphone: v.target.value})} />
                        </div>

                        <div className="input-wrapper">
                            <input type="password" name="password" placeholder="密码（不少于 6 位）" value={password} onInput={v=>this.setState({password: v.target.value})} />
                        </div>
                    </div>
                    <div className="button-wrapper command">
                        <button className="sign-button submit" onClick={this.props.handle.bind(null, username, callphone, password)}>注册大圣</button>
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount(){
        
        this.refs.myInput.onkeydown = (event)=> {
            var e = event || window.event;
            if (e && e.keyCode == 13) {
                let { username, callphone, password } = this.state;
                this.props.handle(username, callphone, password)
            }
        }; 
    }
}

export default Sign_up