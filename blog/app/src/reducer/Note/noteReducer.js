import * as types from '../../constant/Note/noteType.js'
const initialState = {
    note:'',
    newNote:'',
    codeDesc:{},
    isFinish:false,
    article:'',
    addArticle:'',
    newArticle:'',//文章列表
    noteTargetId:'',
    saveArticle:'',//保存文章
    textArticle:'',//文章内容
    wzTargetId:'',
    wzId:'',
    fbArticle:'',// 发布文章
    delArticle:'',//删除文章
    recycleArticle:'',//回收站列表
    hfArticle:''//恢复文章

}
export default  function BlogNote(state=initialState,action){
    switch(action.type){
        //文集列表
        case types.NOTE_DATA:
        let noteTargetId = action.data.data.find(item=>{
            return item.is_show
        }).id
        return Object.assign({},state,{note:{
            code:action.codeDesc.code,
            code:action.codeDesc.code,
            data:action.data.data.filter((v,i)=>{
                return v.is_show == true
            })
        },isFinish:false,noteTargetId:noteTargetId})
        break;

        //新建文集
        case types.NEW_NOTE_DATA:
        let note = state.note;
        let temp = action.data.data;
        note.data.unshift(temp)
        return Object.assign({},state,{newNote:action.data,codeDesc:action.codeDesc,isFinish:action.codeDesc.code=='1'? true : false,note })
        break;
        
        //删除文集
        case types.DEL_NOTE_DATA:
        let id= action.data.data.id;
        return Object.assign({},state,{note:{
            code:state.note.code,
            desc : state.note.desc,
            data:state.note.data.filter(function(v,i){
                return v.id != id;
            })  
            }
        })
        break;
        //修改文集名称
        case types.MODIFY_NAME:
        let modfiyId = action.modfiy.id;
        let modfiyName = action.modfiy.name;
        return Object.assign({},state,{note:{
            code:state.note.code,
            desc : state.note.desc,
            data:state.note.data.map((v,i)=>{
                if(v.id==modfiyId){
                    v.name=modfiyName
                }
                return v
            })
        }})
        break;

        //文章列表
        case types.ARTICLE_DATA:
        let firstId = state.note.data[0].id;
        let wzTargetId = action.data.data.find((v,i)=>{
            return v.is_show ==true &&  v.note_id == firstId 
        }).id;
        return Object.assign({},state,{article:{
            code:action.codeDesc.code,
            desc:action.codeDesc.desc,
            data:action.data.data.filter((v,i)=>{
                return v.is_show ==true
            })
        },newArticle:{
            code:action.codeDesc.code,
            desc:action.codeDesc.desc,
            data:action.data.data.filter((v,i)=>{
                return v.is_show ==true &&  v.note_id == firstId  
            })
        },wzTargetId:wzTargetId,recycleArticle:action.data.data.filter((v,i)=>{
            return v.is_show ==false
        })})
        break;

        //过滤文章
        case types.FILTER_ARTICLE_DATA:
        return Object.assign({},state,{newArticle:{
            code:state.article.code,
            desc:state.article.desc,
            data:state.article.data.filter((v,i)=>{
                // console.log(v.note_id,action.id)
                return v.is_show ==true &&  v.note_id == action.id     
            })
        },noteTargetId:action.id})
        break;

        //新增文章
        case types.ADD_ARTICLE:
        let seq = action.codeDesc.seq;
        let newWz =action.data.data;
            newWz.content = '';
        let arr = [];
        arr = state.newArticle.data;
        seq == 0 ? arr.unshift(newWz) : arr.push(newWz)
        return Object.assign({},state,{addArticle:action.data,newArticle:{
            code:state.newArticle.code,
            desc:state.newArticle.desc,
            data:arr
        }})
        break;

        //获取文章ID
        case types.FILTER_ARTICLE_NR:
        return Object.assign({},state,{wzId:action.id})
        break;

        //文章内容
        case types.TEXT_ARTICLE_DATA:
        return Object.assign({},state,{textArticle:action.data})
        break;
        
        //保存文章
        case types.SAVE_ARTICLE_DATA:
        let idText = action.text.id;
        let titleText = action.text.title;
        let contentText = action.text.content;
        
        return Object.assign({},state,{ newArticle:{
            code:state.article.code,
            desc:state.article.desc,
            data:state.newArticle.data.map((v,i)=>{
                if(v.id == idText){
                    v.title = titleText;
                    v.content = contentText
                }
                return v
            })
        },textArticle:{
            code:state.textArticle.code,
            desc:state.textArticle.desc,
            data:{
                title:titleText,
                content:contentText
            }  
        }})
        break;

        //发布文章
        case types.FB_ARTICLE_DATA:
        return Object.assign({},state,{fbArticle:action.data})
        break;

        //删除文章
        case types.DEL_ARTICLE_DATA:
        let delId = action.data.data.param1;
        return Object.assign({},state,{newArticle:{
                code:state.article.code,
                desc:state.article.desc,
                data:state.newArticle.data.filter((v,i)=>{
                   return v.is_show ==true && v.id !=delId
                })
        },textArticle:{
            code:state.textArticle.code,
            desc:state.textArticle.desc,
            data:{
                title:'',
                content:''
            }
        },recycleArticle:state.recycleArticle.concat(state.newArticle.data.find(item =>{return item.id ==delId}))})
        break;

        //恢复文章
        case types.HF_ARTICLE_DATA:
        let hfId = action.id;
        console.log(hfId,'恢复文章ID')
        return Object({},state,{newArticle:state.newArticle.concat(state.newArticle.data.find(item =>{return item.id ==hfId}))})
        break;

        //彻底删除文章
        case types.ALL_DEL_ARTICLE_DATA:
        return Object({},state)
        break;

        default:
        return state

    }
}

