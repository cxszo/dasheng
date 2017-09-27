import React from 'react'
import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editShow:false,
            commentId:''
        }
    }
    submitComment(){//发表评论
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
    cancel(){//隐藏回复框
        this.setState({
            editShow:false,
            commentId:''
        })
    }
    huifuBtn(i){//显示回复框
        this.setState({
            editShow:true,
            commentId:i
        })
    }
    huifu(m){//回复评论
        let {actions} = this.props;
        let _commentTxt = $('.commentTxt')[m.index].innerHTML;
        console.log(_commentTxt)
        let data = {
            slug:this.props.id,
            id:m.id,
            u_id:m.userid,
            msg:_commentTxt,
            accessToken:local_accessToken
        }
        actions.replyCommentData(data);
        this.setState({
            editShow:false
        })
        $('.commentTxt')[m.index].innerHTML='';
    }
    deleteComment(i){//删除评论
        let {actions} =this.props;
        let data = {
            slug:this.props.id,
            id:i,
            accessToken:local_accessToken
        }
        actions.deleteCommentData(data);
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
                                            <span onClick={this.huifuBtn.bind(this,v.id)}>{this.props.commentCount}人回复</span>
                                        </a>
                                        <cite onClick={this.deleteComment.bind(this,v.id)}>删除</cite>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-comment-list">
                                <div className={this.state.editShow && this.state.commentId == v.id ? 'edit-comment' : 'edit-comment hide'}>
                                    <div className='commentTxt' contentEditable={true}></div>
                                    <div>
                                        <cite onClick={this.huifu.bind(this,{index:i,id:v.id,userid:v.userid})}>发送</cite>
                                        <span onClick={this.cancel.bind(this,v.id)}>取消</span>
                                    </div>
                                </div>
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