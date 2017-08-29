import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'
class Like extends React.Component{
    render(){
        return (
            <div className="like">
                <div className="btn like-group">
                    <div className="btn-like">
                        <a href="">
                            <i className="iconfont ic-like"></i>喜欢
                        </a>
                    </div> 
                    <div className="modal-wrap">
                        <a>1144</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Like