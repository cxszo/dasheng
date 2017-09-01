import * as types from '../../constant/Center/centerType.js'
const initialState = {
    bloglogin:'',
    blogGuanzhu:'',
    blogArticle:''
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

        default:
        return state

    }
}