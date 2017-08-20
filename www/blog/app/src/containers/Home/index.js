import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// 头部
import Header from '../../components/Header'
// 列表
import BlogList from './subpage/BlogList'
// 标签小类别
import BlogHot from './subpage/BlogHot'
//标签大类别
import Tag from '../../components/Tag'
// 热门作者
import HotAuthor from './subpage/HotAuthor'
//推荐
import Tj from './subpage/Tj'


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
                            <Tj/>
                        </div>
                    </div>
                </div>
            </div>
            
           
        )
    }
}

export default Blog
