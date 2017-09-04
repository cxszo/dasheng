import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
        let id = this.props.data[0].userid;
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
        let id = this.props.data[0].userid;
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
                    <li onClick = {this.love.bind(this)} className={this.state.class1Off?'active':''}><a>关注的文集238</a></li>
                    <li onClick = {this.hot.bind(this)} className={this.state.class2Off?'active':''}><a>喜欢的文章12</a></li>
                </div>
                <div className="wrap-like">
                    <ul>
                        <li>
                           <a>
                               <div className="left">
                                   <div className="author">
                                       <a>
                                           <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                                       </a>
                                       <span>
                                            有备而来的路人甲
                                       </span>
                                       <cite>2017-02-03</cite>
                                   </div>
                                   <div className="title-like">
                                        <h3>好的坏的，都是人生路上最好的经历</h3>
                                   </div>
                                   <div className="text">
                                       <p>
                                            前些日子，某位亲戚家的孩子考上了大学。 然后他父母让他加了我微信，意思是有什么不懂的可以多问问我。 虽说亲戚，平时我们之间的联系却屈指可数。不过这一次我们聊得挺久的，关于大学...
                                       </p>
                                   </div>
                                   <div className="meta-like">
                                       <span className="read">
                                           <i>阅读</i>
                                           23
                                       </span>
                                       <span className="comment">
                                           <i>评论</i>
                                            43
                                       </span>
                                       <span className="like">
                                           <i>喜欢</i>
                                           2
                                       </span>
                                   </div>
                               </div>
                               <div className="right">
                                   <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                               </div>
                           </a>
                        </li>
                        <li>
                           <a>
                               <div className="left">
                                   <div className="author">
                                       <a>
                                           <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                                       </a>
                                       <span>
                                            有备而来的路人甲
                                       </span>
                                       <cite>2017-02-03</cite>
                                   </div>
                                   <div className="title-like">
                                        <h3>好的坏的，都是人生路上最好的经历</h3>
                                   </div>
                                   <div className="text">
                                       <p>
                                            前些日子，某位亲戚家的孩子考上了大学。 然后他父母让他加了我微信，意思是有什么不懂的可以多问问我。 虽说亲戚，平时我们之间的联系却屈指可数。不过这一次我们聊得挺久的，关于大学...
                                       </p>
                                   </div>
                                   <div className="meta-like">
                                       <span className="read">
                                           <i>阅读</i>
                                           23
                                       </span>
                                       <span className="comment">
                                           <i>评论</i>
                                            43
                                       </span>
                                       <span className="like">
                                           <i>喜欢</i>
                                           2
                                       </span>
                                   </div>
                               </div>
                               <div className="right">
                                   <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                               </div>
                           </a>
                        </li>
                        <li>
                           <a>
                               <div className="left">
                                   <div className="author">
                                       <a>
                                           <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                                       </a>
                                       <span>
                                            有备而来的路人甲
                                       </span>
                                       <cite>2017-02-03</cite>
                                   </div>
                                   <div className="title-like">
                                        <h3>好的坏的，都是人生路上最好的经历</h3>
                                   </div>
                                   <div className="text">
                                       <p>
                                            前些日子，某位亲戚家的孩子考上了大学。 然后他父母让他加了我微信，意思是有什么不懂的可以多问问我。 虽说亲戚，平时我们之间的联系却屈指可数。不过这一次我们聊得挺久的，关于大学...
                                       </p>
                                   </div>
                                   <div className="meta-like">
                                       <span className="read">
                                           <i>阅读</i>
                                           23
                                       </span>
                                       <span className="comment">
                                           <i>评论</i>
                                            43
                                       </span>
                                       <span className="like">
                                           <i>喜欢</i>
                                           2
                                       </span>
                                   </div>
                               </div>
                               <div className="right">
                                   <img src="http://upload-images.jianshu.io/upload_images/3459828-42e26b4a16075681.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                               </div>
                           </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
export default TabF