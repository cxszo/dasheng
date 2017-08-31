import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
 
import './index.scss'
import NoData from '../../../../components/NoData/'
class LoveList extends React.Component{
    constructor(props){
        super(props);
    }
    close(){
        let {actions} = this.props;
        actions.getLove(false);//关闭喜欢列表
    }
    render(){
        return (
            <div className={this.props.show == false ?'hide':''}>
            <div className="lovelist">
                <div className="love-wrap">
                    <div className="love-header">
                        <h4>喜欢的用户</h4>
                        <span onClick={this.close.bind(this)}>X</span>
                    </div>
                    <div className="love-body">
                        <ul>
                            {
                                this.props.data.length == 0? <NoData/> :
                                this.props.data.map((v,i)=>{
                                    return (
                                        <li key= {i}>
                                            <a>
                                                <img src={v.headimg}/>
                                            </a>
                                            <em>{v.name}</em>
                                            <span>{v.cdate}</span>
                                        </li>
                                    )
                                })
                                
                            }
                                  
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mask"></div>
            </div>
        )
    }
}
export default LoveList