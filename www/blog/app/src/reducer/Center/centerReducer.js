import * as types from '../../constant/Center/centerType.js'
const initialState = {
    bloglogin:'',
    blogGuanzhu:'',
    blogArticle:'',
    followList:'',
    collectList:'',
    editSign:'',
    guanZhu:''
}
export default  function BlogCenter(state=initialState,action){
    switch(action.type){

        case types.LOGIN_DATA_CENTER:
        return Object.assign({},state,{bloglogin:action.data})
        break;
    
        case types.GETGUANZHU_DATA:
        return Object.assign({},state,{blogGuanzhu:action.data})
        break;

        case types.GETARTICLE_DATA:
        return Object.assign({},state,{blogArticle:action.data})
        break;

        case types.FOLLOWLIST_DATA:
        return Object.assign({},state,{followList:action.data})
        break;

        case types.COLLECT_DATA:
        return Object.assign({},state,{collectList:action.data})
        break;

        case types.EDIT_DATA:
        return Object.assign({},state,{editSign:action.data})
        break;

        case types.GUANZHU_DATA:
        return Object.assign({},state,{guanZhu:action.data})
        break;

        default:
        return state

    }
}