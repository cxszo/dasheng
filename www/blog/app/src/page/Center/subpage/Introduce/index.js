import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.scss'

class Introduce extends React.Component{
    toLike(i){
        hashHistory.push("/Center/"+i+"/likes");
    }
    render(){
        return(
            <div className="introduce">
                <div className="jieshao">
                    <div>
                        <span>个人介绍</span>
                        <em>编辑</em>
                    </div>
                    <ul>
                        <li>
                            <a>我关注的专题/文集</a>
                        </li>
                        <li>
                            <a onClick = {this.toLike.bind(this,this.props.data.userid)}>我喜欢的文章</a>
                        </li>
                    </ul>
                </div>
                <div className="zt">
                    <p>我创建的专题</p>
                    <p>创建一个新专题</p>
                </div>
                <div className="wj">
                    <div className="title">我的文集</div>
                    <ul>
                        <li>
                            <a>随笔</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Introduce