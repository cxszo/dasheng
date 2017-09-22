import * as types from '../../constant/Note/noteType.js'
import{Util} from '../../util/util.js'
// 文集列表
export const getNotetData = param =>{
        return dispatch =>{
            Util.ajaxGet(Util.burl+'/blog/notebooks?accessToken='+param.accessToken,(data)=>{
                    dispatch(noteData(data,{code:data.code,desc:data.desc}))
                },(err)=>{
                    console.log(err);
                }
            )
        }
     
 }

 const noteData=(data,codeDesc)=>({
         type: types.NOTE_DATA,
         data,
         codeDesc:codeDesc
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
                dispatch(articleData(data,{code:data.code,desc:data.desc,}))
            },(err)=>{
                console.log(err);
            }
        )
    }
 
}

const articleData=(data,codeDesc)=>({
     type: types.ARTICLE_DATA,
     data,
     codeDesc:codeDesc
})

export const filter = note_id =>({
    type:types.FILTER_ARTICLE_DATA,
    id:note_id
})
//新增文章
export const addWz = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notes',_param,(data)=>{
                dispatch(WzData(data,{code:data.code,desc:data.desc,seq:_param.seq_in_nb}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}

const WzData =(data,codeDesc)=>({
    type: types.ADD_ARTICLE,
    data,
    codeDesc:codeDesc
})
//过滤文章
export const filterwZ = wz_id =>({
    type:types.FILTER_ARTICLE_NR,
    id:wz_id
})

//文章内容
export const textArticleData = param =>{
    return dispatch =>{
        Util.ajaxGet(Util.burl+'/blog/notes/'+param.id+'/content?accessToken='+param.accessToken,(data)=>{
                dispatch(textArticle(data,{code:data.code,desc:data.desc,}))
            },(err)=>{
                console.log(err);
            }
        )
    }
}
const textArticle = (data,codeDesc) =>({
    type:types.TEXT_ARTICLE_DATA,
    data,
    codeDesc:codeDesc
})
//保存文章
export const saveArticleData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.put(Util.burl+'/blog/notes/'+_param.id+'',_param,(data)=>{
                dispatch(saveArticle(data,{title:_param.title,content:_param.content,id:_param.id}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const saveArticle =(data,text) =>({
    type:types.SAVE_ARTICLE_DATA,  
    data,
    text:text
})

//发布文章
export const fbArticleData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notes/'+_param.id+'/publicize',_param,(data)=>{
                dispatch(fbArticle(data,{code:data.code,desc:data.desc}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const fbArticle =(data,codeDesc) =>({
    type:types.FB_ARTICLE_DATA,  
    data,
    codeDesc:codeDesc
})

//删除文章
export const delArticleData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notes/'+_param.id+'/soft_destroy',_param,(data)=>{
                dispatch(delArticle(data))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const delArticle =(data) =>({
    type:types.DEL_ARTICLE_DATA,  
    data
})

//恢复文章
export const hfArticleData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notes/'+_param.id+'/put_back',_param,(data)=>{
                dispatch(hfArticle(data,{id:_param.id}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const hfArticle =(data,id) =>({
    type:types.HF_ARTICLE_DATA,  
    data,
    id:id.id
})

//彻底删除文章
export const allDelArticleData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.delete(Util.burl+'/blog/notes/'+_param.id,_param,(data)=>{
                dispatch(allDelArticle(data))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const allDelArticle =(data) =>({
    type:types.ALL_DEL_ARTICLE_DATA,  
    data
})
