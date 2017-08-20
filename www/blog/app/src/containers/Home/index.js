import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import BlogList from './subpage/BlogList'
import BlogHot from './subpage/BlogHot'
import HotAuthor from './subpage/HotAuthor'
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
                <div className="main">
                    <div className="main-left">
                        <Tag/>
                        <BlogList/>
                    </div>
                    <div className="main-right">
                        <div className="">
                            <BlogHot/>
                            <HotAuthor/>
                        </div>
                    </div>
                </div>
            </div>
            
           
        )
    }
}

export default Blog
