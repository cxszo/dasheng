import React from 'react'
import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Comment extends React.Component{
    submitComment(){
        let {actions} = this.props;
        let commentText = $('#commentText').text();
        let data = {
            id:this.props.id,
            msg:commentText,
            accessToken:local_accessToken
        }
        actions.commentArticleData(data);
        $('#commentText').text('');//清空原来的输入内容
    }
    dianZan(i){//点赞
        let {actions} = this.props;
        let data = {
            slug:this.props.id,
            id:i,
            accessToken:local_accessToken
        }
        actions.DzData(data)
    }
    huifu(i){//回复评论
        let {actions} = this.props;
        let data = {
            slug:this.props.id,
            id:i,
            u_id:'2222223',
            msg:'这是我第一个回复的评论',
            accessToken:local_accessToken
        }
        actions.replyCommentData(data)
    }
    render(){
        return(
            <div className = 'detail-comment-box'>
            {/* 发表评论 */}
            <div className="new-comment">
                <a className='touxiang'>
                    <img src = {this.props.login_data.headimg}/>
                </a>
                {
                    !this.props.isLogin ? 
                    <div className="sign-container">
                        <a href="" className="btn btn-sign">登录</a> 
                        <span>后发表评论</span>
                    </div>
                    :
                    <div>
                        <div className="sign-container" contentEditable={true} id='commentText'></div>
                        <div className="fbBtn" onClick={this.submitComment.bind(this)}>发表评论</div>
                    </div>
                }
               
            </div>
            {
                this.props.commentData.length == '' ? '' :
                this.props.commentData.list.map((v,i)=>{
                    return (
                        <div className="comment" key={i}>
                            <div className="comment-author">
                                <div className="author">
                                    <a>
                                        <img src={v.headimg}/>
                                    </a>
                                    <div className="info">
                                        <p>{v.name}</p>
                                        <p>{v.floor}楼 ·{v.cdate}</p>
                                    </div>
                                </div>
                                <div className="wrap">
                                    <p>{v.msg}</p>
                                    <div className="tool">
                                        <a>
                                            <i></i>
                                            <span onClick={this.dianZan.bind(this,v.id)}>{v.love}人点赞</span>
                                        </a>
                                        <a>
                                            <i></i>
                                            <span onClick={this.huifu.bind(this,v.id)}>{v.count}人回复</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-comment-list">
                               {
                                   !v.revert ?  '' :
                                   v.revert.map((m,n)=>{
                                        return(
                                            <div className="comment-item" key = {n}>
                                                <p className="comment-item-desc">
                                                    <a>{m.name}</a>
                                                    <span>
                                                        <a>{v.at_name}</a>
                                                        {m.msg}
                                                    </span>
                                                </p>
                                                <div className="comment-item-time">
                                                    <span>{v.cdate}</span>
                                                    <a>
                                                        <i></i>
                                                        <em>回复</em>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                   })
                                }
                            </div>
                        </div>
                    )
                })
               
            }
        </div>
        )
    }
}
export default Comment