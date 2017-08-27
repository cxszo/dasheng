import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

class Msg extends React.Component{
    render(){
        return(
            <div className="msg-header">
                <span className="ico"><img src="http://upload.jianshu.io/users/upload_avatars/1717877/aa3777f3ee0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/></span>
                <span className="text">
                    <p className="title">Mr_Simple</p>
                    <p className="info">
                        <em>
                            <div>
                                <a>1</a>
                                <a>关注</a>
                            </div>
                        </em>
                        <em>
                            <div>
                                <a>1</a>
                                <a>粉丝</a>
                            </div>
                        </em> 
                        <em>
                            <div>
                                <a>2</a>
                                <a>文章</a>
                            </div>
                        </em>
                        <em>
                            <div>
                                <a>140</a>
                                <a>字数</a>
                            </div>
                        </em>
                        <em>
                            <div>
                                <a>1</a>
                                <a>收藏喜欢</a>
                            </div>
                        </em>
                    </p>
                </span>
        </div>
        )
    }
}
export default Msg