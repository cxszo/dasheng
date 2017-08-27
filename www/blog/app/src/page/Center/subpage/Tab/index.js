import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

class Tab extends React.Component{
    render(){
        return(
            <div className="tab">
                <div className="title">
                    <li className="active"><a>文章</a></li>
                    <li><a>动态</a></li>
                    <li><a>最新评价</a></li>
                    <li><a>热门</a></li>
                </div>
                <div className="wrap">
                    <ul>
                        <li>
                            <div className="wrap-content">
                                <div className="author">
                                    <a className="ico">
                                        <img src="http://upload.jianshu.io/users/upload_avatars/1717877/aa3777f3ee0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
                                    </a>
                                    <div className="name">
                                        <a>Mr_simple</a>
                                        <span>08.16 16:45</span>
                                    </div>
                                </div>
                                <p className="biaoti">耐火层见叠出</p>
                                <p className="abstract">
                                    下筛 ...function(){ }...
                                </p>
                                <div className="meta">
                                    <a>
                                        <i></i>
                                        0
                                    </a>
                                    <a>
                                        <i></i>
                                        1
                                    </a>
                                    <a>
                                        <i></i>
                                        2
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Tab