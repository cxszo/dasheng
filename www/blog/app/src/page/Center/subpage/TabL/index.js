import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import NoData from '../../../../components/NoData/'

import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class TabF extends React.Component{
    constructor(props){
        super(props);
        this.state={
            class1Off:false,
            class2Off:true
        }
    }
    love(){
        this.setState({
            class1Off:true,
            class2Off:false
        })
        let {actions} = this.props;
        let id = this.props.id;
        let data = {
            accessToken:local_accessToken,
            or:'love',
            id:id
        }
        actions.getArticleList(data);
    }
    hot(){
        this.setState({
            class1Off:false,
            class2Off:true
        })
        let {actions} = this.props;
        let id = this.props.id;
        let data = {
            accessToken:local_accessToken,
            or:'hot',
            id:id
        }
        actions.getArticleList(data);
    }
    render(){
        console.log(this.props)
        return(
            <div className="tab">
                <div className="title">
                    {/* <li onClick = {this.love.bind(this)} className={this.state.class1Off?'active':''}><a>关注的文集238</a></li> */}
                    <li onClick = {this.hot.bind(this)} className={this.state.class2Off?'active':''}><a>收藏的文章</a></li>
                </div>
                <div className="wrap-like">
                    <ul>
                        {
                            this.props.data.length == '0' ? <NoData/> :
                            this.props.data.map((v,i)=>{
                                return (
                                    <li key ={i}>
                                        <a>
                                            <div className="left">
                                                <div className="author">
                                                    <a>
                                                        <img src={v.headimg}/>
                                                    </a>
                                                    <span>
                                                            {v.name}
                                                    </span>
                                                    <cite>{v.cdate}</cite>
                                                </div>
                                                <div className="title-like">
                                                        <h3>{v.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{v.intro}</p>
                                                </div>
                                                <div className="meta-like">
                                                    <span className="read">
                                                        <i>阅读</i>
                                                        {v.read}
                                                    </span>
                                                    <span className="comment">
                                                        <i>评论</i>
                                                            {v.comment}
                                                    </span>
                                                    <span className="like">
                                                        <i>喜欢</i>
                                                        {v.love}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                                            </div>
                                        </a>
                                        </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
export default TabF