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
//
import {Util} from '../../util/util.js'
class Blog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            islogin: false
        }
    }
    componentDidMount(){
        let {bloglistData,blogtitleData,blogtitleData_2,blogauthorData,actions} = this.props;
        actions.getListData();// 博客列表
        actions.getTitleData();//博客标题1
        actions.getTitleData_2('1');//博客标题2
        actions.getAuthorData();//热门原创作者
       
        //检测登录
        let accessToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWQrOa1tyIsInBhc3N3b3JkIjoibG92ZW1lIiwiaWF0IjoxNTAzOTExMjE0LCJleHAiOjE1MDM5OTc2MTR9.0V8vRG3In8Rgl76xsu9sdQX7_5B4COm5DATTfxG1_PM';
        localStorage.setItem('accessToken',accessToken);
        if(Util.isLogin()){
            this.setState({
                islogin:true
            })
        }
    }
    render() {
        // 博客列表
        let {bloglistData,blogtitleData,blogtitleData_2,blogauthorData,actions}=this.props;
        let _BlogList = bloglistData.data || [];
        //博客标题1
        let Blogtitle_1 = blogtitleData.data || [];
        //博客标题2
        let Blogtitle_2 = blogtitleData_2.data || [];
        //热门原创作者
        let Blogauthor = blogauthorData.data || [];
        console.log(this.props)
        return (
            <div className="agree">
                <Header isLogin={this.state.islogin}/>
                <div className="main">
                    <div className="main-left">
                        <Tag data={Blogtitle_1} actions={actions}/>
                        <BlogList data={_BlogList}/>
                    </div>
                    <div className="main-right">
                        <div className="">
                            <BlogHot data={Blogtitle_2} actions={actions}/>
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
