import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import {Util} from '../../../../util/util.js'
class Like extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            turnoff : false,
            off:'2',
            islogin: false
        }

    }
    handler(){
        let {bloglikeData} = this.props.data;
        let {actions} = this.props.actions;

        console.log(bloglikeData)
        console.log(actions)
        if(this.state.turnoff==true){
            this.setState({
                turnoff : false,
                off:'2'
            })
        }
        if(Util.isLogin()){
            this.setState({
                islogin:true
            })
        }
        let data = {
            id:this.props.id
        }

        let _data = Object.assign({},data,Util.isLogin())
        // actions.getLike(_data);
        
        // if(bloglikeData.code == '1'){
        //     this.setState({
        //         turnoff:true,
        //         off:'1'
        //     })
        // }else{
        //     alert(bloglikeData.desc)
        // }
        // actions.getDetailData(_data);
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="like-box">
            <div className="like">
                <div className={this.state.off == '1' ? 'btn like-group cur' :'btn like-group'}>
                    <div className="btn-like">
                        <a onClick={this.handler.bind(this)}>
                            <i className="iconfont ic-like"></i>喜欢
                        </a>
                    </div> 
                    <div className="modal-wrap">
                        <a>{this.props.data.love}</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Like