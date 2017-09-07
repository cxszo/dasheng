import React from 'react'

import './index.scss'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class Dropdown extends React.Component{
    toCenter(e){
        let user_id = this.props.user_id;
        hashHistory.push("/Center/"+user_id);
    }
    render(){
        let show = this.props.show;
        return (
            <div className ={show?"drop" : 'drop hide'}>
                <ul>
                    <li>
                        <a onClick ={this.toCenter.bind(this)}>
                            <cite></cite>
                            我的主页
                        </a>
                    </li>
                    <li>
                        <a>
                        <cite></cite>
                            收藏文章
                        </a>
                    </li>
                    <li>
                        <a>
                        <cite></cite>
                            设置
                        </a>
                    </li>
                    <li>
                        <a>
                        <cite></cite>
                            退出
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Dropdown