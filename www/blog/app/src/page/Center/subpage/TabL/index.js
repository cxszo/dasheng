import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
    love(){
        this.setState({
            class1Off:true,
            class2Off:false
        })
        let {actions} = this.props;
        let id = this.props.data[0].userid;
        let data = {
            accessToken:local_accessToken,
            or:'love',
            id:id
        }
        actions.getArticleList(data);
    }
    hot(){
        this.setState({
            class1Off:false,
            class2Off:true
        })
        let {actions} = this.props;
        let id = this.props.data[0].userid;
        let data = {
            accessToken:local_accessToken,
            or:'hot',
            id:id
        }
        actions.getArticleList(data);
    }
    render(){
        console.log(this.props)
        return(
            <div className="tab">
                <div className="title">
                    <li onClick = {this.love.bind(this)} className={this.state.class1Off?'active':''}><a>关注的文集238</a></li>
                    <li onClick = {this.hot.bind(this)} className={this.state.class2Off?'active':''}><a>喜欢的文字12</a></li>
                </div>
                <div className="wrap">
                    <ul>
                        <li>
                            <a className="ico_f">
                                <img src='http://ov0zo91tq.bkt.clouddn.com/headimg/default/323.jpg'/>
                            </a>
                            <div className="info">
                                <p className="name">
                                    <em>茜喵</em>
                                    <i></i>
                                </p>
                                <p className="meta">
                                    <span>
                                         关注
                                        <cite>12</cite>
                                    </span>
                                    <span>
                                         粉丝
                                        <cite>34</cite>
                                    </span>
                                    <span>
                                         文章
                                        <cite>92</cite>
                                    </span>
                                </p>
                                <p className="meta no-border">
                                     <span>
                                            写了
                                        <cite>322</cite>
                                        字,
                                        您获得了
                                        <cite>322</cite>
                                        喜欢
                                    </span>
                                </p>
                                
                            </div>
                            <a className="like">
                                +关注
                            </a>
                        </li>
                        <li>
                            <a className="ico_f">
                                <img src='http://ov0zo91tq.bkt.clouddn.com/headimg/default/323.jpg'/>
                            </a>
                            <div className="info">
                                <p className="name">
                                    <em>茜喵</em>
                                    <i></i>
                                </p>
                                <p className="meta">
                                    <span>
                                         关注
                                        <cite>12</cite>
                                    </span>
                                    <span>
                                         粉丝
                                        <cite>34</cite>
                                    </span>
                                    <span>
                                         文章
                                        <cite>92</cite>
                                    </span>
                                </p>
                                <p className="meta no-border">
                                     <span>
                                            写了
                                        <cite>322</cite>
                                        字,
                                        您获得了
                                        <cite>322</cite>
                                        喜欢
                                    </span>
                                </p>
                                
                            </div>
                            <a className="like">
                                +关注
                            </a>
                        </li>
                        <li>
                            <a className="ico_f">
                                <img src='http://ov0zo91tq.bkt.clouddn.com/headimg/default/323.jpg'/>
                            </a>
                            <div className="info">
                                <p className="name">
                                    <em>茜喵</em>
                                    <i></i>
                                </p>
                                <p className="meta">
                                    <span>
                                         关注
                                        <cite>12</cite>
                                    </span>
                                    <span>
                                         粉丝
                                        <cite>34</cite>
                                    </span>
                                    <span>
                                         文章
                                        <cite>92</cite>
                                    </span>
                                </p>
                                <p className="meta no-border">
                                     <span>
                                            写了
                                        <cite>322</cite>
                                        字,
                                        您获得了
                                        <cite>322</cite>
                                        喜欢
                                    </span>
                                </p>
                                
                            </div>
                            <a className="like">
                                +关注
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default TabF