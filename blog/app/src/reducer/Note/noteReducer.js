import * as types from '../../constant/Note/noteType.js'
const initialState = {
    note:'',
    newNote:'',
    codeDesc:{},
    isFinish:false,
    article:''
}
export default  function BlogNote(state=initialState,action){
    switch(action.type){
        case types.NOTE_DATA:
        return Object.assign({},state,{note:action.data,isFinish:false})
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
        return Object.assign({},state,{article:action.data})
        break;
        
        default:
        return state

    }
}

