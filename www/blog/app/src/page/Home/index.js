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
import Tjian from './subpage/Tjian'

class Blog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        let {bloglistData,blogtitleData,blogauthorData,actions} = this.props;
        actions.getListData();// 博客列表
        actions.getTitleData();//博客标题
        actions.getAuthorData();//热门原创作者
    }
    render() {
        // 博客列表
        let {bloglistData,blogtitleData,blogauthorData,actions}=this.props;
        let _BlogList = bloglistData.data || [];
        //博客标题
        let Blogtitle_1 = blogtitleData.data ||[];
        let Blogtitle_2_0 = Blogtitle_1[0] || '';
        let subset = Blogtitle_2_0.subset || '';
        //热门原创作者
        let Blogauthor = blogauthorData.data || [];
        console.log(this.props)
        return (
            <div className="agree">
                <Header/>
                <div className="main">
                    <div className="main-left">
                        <Tag data={Blogtitle_1}/>
                        <BlogList data={_BlogList}/>
                    </div>
                    <div className="main-right">
                        <div className="">
                            <BlogHot data={subset}/>
                            <HotAuthor data={Blogauthor}/>
                            <Tjian/>
                        </div>
                    </div>
                </div>
            </div>
            
           
        )
    }
}

export default Blog
