import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import {Util} from '../../../../util/util.js'
class SideTool extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            turnoff : false,
            off:'2',
            islogin: false
        }

    }
    handler(){
        let {actions} = this.props;
        this.setState({
            turnoff:true,
            off:'1'
        })
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
            id:this.props.id || ''
        }
        let _data = Object.assign({},data,Util.isLogin())
         actions.getCollect(_data);
         actions.getDetailData(_data);
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="sidetool" >
               <ul>
                   <li>回顶</li>
                   <li onClick={this.handler.bind(this)}  className={ this.state.off == '1' ? 'cur' :''}>收藏</li>
               </ul>
            </div>
        )
    }
}
export default SideTool