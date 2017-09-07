import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NoData from '../../../../components/NoData/'

import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class TabF extends React.Component{
    constructor(props){
        super(props);
        this.state={
            class1Off:true,
            class2Off:false
        }
    }
    following(){
        this.setState({
            class1Off:true,
            class2Off:false
        })
        let {actions} = this.props;
        let id = this.props.id
        let data = {
            accessToken:local_accessToken,
            act:'1',
            id:id
        }
        actions.getFollowListData(data);
    }
    followers(){
        this.setState({
            class1Off:false,
            class2Off:true
        })
        let {actions} = this.props;
        let id = this.props.id;
        let data = {
            accessToken:local_accessToken,
            act:'2',
            id:id
        }
        actions.getFollowListData(data);
    }
    render(){
        console.log(this.props)
        return(
            <div className="tab">
                <div className="title">
                    <li onClick = {this.following.bind(this)} className={this.state.class1Off?'active':''}><a>关注用户</a></li>
                    <li onClick = {this.followers.bind(this)} className={this.state.class2Off?'active':''}><a>粉丝</a></li>
                </div>
                <div className="wrap">
                    <ul>
                        {
                            this.props.data.length == '0' ? <NoData/> :
                            this.props.data.map((v,i)=>{
                                return (
                                        <li key ={i}>
                                            <a className="ico_f">
                                                <img src={v.headimg}/>
                                            </a>
                                            <div className="info">
                                                <p className="name">
                                                    <em>{v.name}</em>
                                                    <i></i>
                                                </p>
                                                <p className="meta">
                                                    <span>
                                                        关注
                                                        <cite>{v.following}</cite>
                                                    </span>
                                                    <span>
                                                        粉丝
                                                        <cite>{v.followers}</cite>
                                                    </span>
                                                    <span>
                                                        文章
                                                        <cite>{v.articlenum}</cite>
                                                    </span>
                                                </p>
                                                <p className="meta no-border">
                                                    <span>
                                                            写了
                                                        <cite>322</cite>
                                                        字,
                                                        您获得了
                                                        <cite>{v.love}</cite>
                                                        喜欢
                                                    </span>
                                                </p>
                                                
                                            </div>
                                            {
                                                v.is_follow ? 
                                                <a className="like">
                                                    +关注
                                                </a>
                                                :
                                                null
                                             }
                                        </li>        
                                    )
                                })
                         }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TabF