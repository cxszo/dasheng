import * as types from '../../constant/Note/noteType.js'
const initialState = {
    note:'',
    newNote:'',
    codeDesc:{},
    isFinish:false,
    article:'',
    addArticle:'',
    newArticle:'',
    noteTargetId:''

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
        }})
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
        let _newArticle = state.newArticle;
        let newWz =action.data.data;
        _newArticle.data.unshift(newWz);
        return Object.assign({},state,{addArticle:action.data,_newArticle})
        break;

        default:
        return state

    }
}

