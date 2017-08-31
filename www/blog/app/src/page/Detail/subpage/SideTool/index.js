import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import {Util} from '../../../../util/util.js'
class SideTool extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            turnoff: false,
            islogin: false
        }

    }
    handler(){
        let {actions} = this.props;
        
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
    componentWillReceiveProps(nextProps){
        //默认去详情接口的是否收藏状态
       let is_collect = nextProps.is_collect;
        if(is_collect == true){
            this.setState({
                turnoff:true
            })
        }else{
            this.setState({
                turnoff:false
            })
        }
    }
    render(){
        return (
            <div className="sidetool" >
               <ul>
                   <li>回顶</li>
                   <li onClick={this.handler.bind(this)}  className={ this.state.turnoff == true ? 'cur' :''}>收藏</li>
               </ul>
            </div>
        )
    }
}
export default SideTool