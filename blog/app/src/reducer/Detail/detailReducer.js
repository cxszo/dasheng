import * as types from '../../constant/Detail/detailType.js'
const initialState = {
    blogdetail:'',
    bloglike:'',
    blogcollect:'',
    bloglovelist:'',
    loveMask:false,
    guanZhu:'',
    isFinish:false,
    bloglogin:''
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

        default:
        return state

    }
}

