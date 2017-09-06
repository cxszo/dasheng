import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Msg extends React.Component{
    toFollowing(i){
        hashHistory.push("/Center/"+i+"/following");
    }
    toFollowers(i){
        hashHistory.push("/Center/"+i+"/followers");
    }
    toCenter(i){
        hashHistory.push("/Center/"+i+"");
    }
    attention(){
       let {actions} = this.props;
       let id = this.props.id;
       let data = {
            accessToken:local_accessToken,
            id:id
       }
        actions.getGz(data);
        actions.getGuanZhuData(data);
    }
    render(){
        return(
            <div className="msg-header">
                <span className="ico"><img src={this.props.data.headimg}/></span>
                
                <span className="text">
                    <p className="title">{this.props.data.name}<i className='sex'></i></p>
                    <p className="info">
                        <em>
                            <div>
                                <a>{this.props.data.following}</a>
                                <a onClick={this.toFollowing.bind(this,this.props.data.userid)}>关注</a>
                            </div>
                        </em>
                        <em>
                            <div>
                                <a>{this.props.data.followers}</a>
                                <a onClick={this.toFollowers.bind(this,this.props.data.userid)}>粉丝</a>
                            </div>
                        </em> 
                        <em>
                            <div>
                                <a>{this.props.data.articlenum}</a>
                                <a  onClick={this.toCenter.bind(this,this.props.data.userid)}>文章</a>
                            </div>
                        </em>
                       
                    </p>
                </span>
                {
                    this.props.data.is_me ? null :
                    <a className={!this.props.data.is_follow  ? 'like':'like cur'} onClick={this.attention.bind(this)}>{!this.props.data.is_follow ? '+关注':'√ 已关注'}</a>
                }
                
        </div>
        )
    }
}
export default Msg