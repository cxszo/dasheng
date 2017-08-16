import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Blog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="agree">
            
            
                        <div className="navbar ">
                        <div className="navbar-inner">
                            <div className="left"></div>
                            <div className="center">博客</div>
                            <div className="right"></div>
                        </div>
                    </div>
            </div>
            
           
        )
    }
}

export default Blog
