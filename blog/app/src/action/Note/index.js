import * as types from '../../constant/Note/noteType.js'
import{Util} from '../../util/util.js'
// 文集列表
export const getNotetData = param =>{
        return dispatch =>{
            Util.ajaxGet(Util.burl+'/blog/notebooks?accessToken='+param.accessToken,(data)=>{
                    dispatch(noteData(data))
                },(err)=>{
                    console.log(err);
                }
            )
        }
     
 }

 const noteData=data=>({
         type: types.NOTE_DATA,
         data
 })
 //新建文集
 export const getNewData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notebooks',_param,(data)=>{
                dispatch(noteNewData(data,{code:data.code,desc:data.desc}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}

const noteNewData=(data,codeDesc)=>({
     type: types.NEW_NOTE_DATA,
     data,
     codeDesc:codeDesc
})
//删除文集
export const delWj = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notebooks/'+_param.id+'/soft_destroy',_param,(data)=>{
                dispatch(delWjData(data,{code:data.code,desc:data.desc}))
            },(err)=>{
                console.log(err)
            }
        )
    }

}

const delWjData =(data,codeDesc)=>({
    type: types.DEL_NOTE_DATA,
    data,
    codeDesc:codeDesc
})
//修改文集名称
export const modifyName = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.put(Util.burl+'/blog/notebooks/'+_param.id+'',_param,(data)=>{
                dispatch(modify(data,{code:data.code,desc:data.desc,id:_param.id,name:_param.name}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const modify =(data,modfiy)=>({
    type: types.MODIFY_NAME,
    data,
    modfiy:modfiy
})
//文章列表
export const getarticleData = param =>{
    return dispatch =>{
        Util.ajaxGet(Util.burl+'/blog/notes?accessToken='+param.accessToken,(data)=>{
                dispatch(articleData(data))
            },(err)=>{
                console.log(err);
            }
        )
    }
 
}

const articleData=data=>({
     type: types.ARTICLE_DATA,
     data
})