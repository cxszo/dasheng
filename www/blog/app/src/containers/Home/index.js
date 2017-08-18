import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import BlogList from './subpage/BlogList'
import BlogHot from './subpage/BlogHot'
import Tag from '../../components/Tag'
class Blog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="agree">
                <Header/>
                <Tag/>
                <div className="main">
                    <div className="main-left">
                        <BlogList/>
                    </div>
                    <div className="main-right">
                        <div className="">
                            <BlogHot/>
                        </div>
                    </div>
                </div>
            </div>
            
           
        )
    }
}

export default Blog
