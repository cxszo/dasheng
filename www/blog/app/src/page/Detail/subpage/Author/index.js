import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Like from '../Like/'
import './index.scss'
class Author extends React.Component{
    render(){
        return (
            <div>
                <div className="follow-detail">
                    <div className="info">
                        <a className="avatar" href="/u/0fe9f776f37a">
                            <img src="http://upload.jianshu.io/users/upload_avatars/4786780/f452cc6c-1110-4d5c-864f-6f50f88144c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="144"/>
                        </a>          
                        <a className="btn btn-success follow"><i className="iconfont ic-follow"></i><span>+关注</span></a>
                        <a className="title" href="/u/0fe9f776f37a">用时间酿酒</a>
                            <i className="iconfont ic-man"></i>
                        <p>写了 341289 字，被 24226 人关注，获得了 39697 个喜欢</p>
                        <div className="signature">Powerpoint疯狂爱好者，热爱分享，喜欢写作。关注公众号：PPT达人秀，跟郑少聊点P事。</div>
                    </div>
                </div>
                <Like/>
            </div>
        )
    }
}
export default Author