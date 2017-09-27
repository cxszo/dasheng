import * as types from '../../constant/Detail/detailType.js'
const initialState = {
    blogdetail:'',
    bloglike:'',
    blogcollect:'',
    bloglovelist:'',
    loveMask:false,
    guanZhu:'',
    isFinish:false,
    bloglogin:'',
    comment:'',//评论
    replayComment:'',//回复评论
    commentArticle:'',//评论
    dianZan:''
}
export default  function BlogDetail(state=initialState,action){
    switch(action.type){
        case types.DETAIL_DATA:
        return Object.assign({},state,{blogdetail:action.data,isFinish:false})
        break;

        case types.LIKE:
        return Object.assign({},state,{bloglike:action.data,isFinish:true})
        break;

        case types.COLLECT:
        return Object.assign({},state,{blogcollect:action.data})
        break;

        case types.LOVELIST:
        return Object.assign({},state,{bloglovelist:action.data})
        break;

        case types.LOVEMASK:
        return Object.assign({},state,{loveMask:action.data})
        break;
        
        case types.GUANZHU:
        return Object.assign({},state,{guanZhu:action.data})
        break;

        case types.LOGIN_DATA:
        return Object.assign({},state,{bloglogin:action.data})
        break;

        case types.COMMENT_DATA://评论列表
        return Object.assign({},state,{comment:action.data})
        break;

        case types.REPLAY_COMMENT_DATA://回复评论
        return Object.assign({},state,{replayComment:action.data})
        break;

        case types.COMMENT_ARTICLE_DATA://评论
        return Object.assign({},state,{comment:{
            code:state.comment.code,
            desc:state.comment.desc,
            data:{
                count:state.comment.data.count - 0 +1,
                list:state.comment.data.list.concat(action.data.data)
            }
        }})
        break;

        case types.DIAN_ZAN_DATA://点赞
        return Object.assign({},state,{dianZan:action.data})
        break;

        case types.DELETE_COMMENT_DATA://删除评论
        return Object.assign({},state)
        break;

        case types.DELETE_REPLAYCOMMENT_DATA://删除回复
        return Object.assign({},state)
        break;

        default:
        return state

    }
}

