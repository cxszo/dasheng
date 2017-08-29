import * as types from '../../constant/Detail/detailType.js'
const initialState = {
    blogdetail:'',
    bloglike:'',
    blogcollect:''
}
export default  function BlogDetail(state=initialState,action){
    switch(action.type){
        case types.DETAIL_DATA:
        return Object.assign({},state,{blogdetail:action.data})
        break;

        case types.LIKE:
        return Object.assign({},state,{bloglike:action.data})
        break;

        case types.COLLECT:
        return Object.assign({},state,{blogcollect:action.data})
        break;
        
        default:
        return state

    }
}

