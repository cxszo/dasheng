import * as types from '../../constant/Detail/detailType.js'
const initialState = {
    blogdetail:''
}
export default  function BlogDetail(state=initialState,action){
    switch(action.type){
        case types.DETAIL_DATA:
        return Object.assign({},state,{blogdetail:action.data})
        break;
        
        default:
        return state

    }
}

