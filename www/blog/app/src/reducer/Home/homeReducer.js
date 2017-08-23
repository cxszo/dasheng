import * as types from '../../constant/Home/homeType.js'
const initialState = {
    bloglist:''
}
export default  function BlogList(state=initialState,action){
    switch(action.type){
        case types.BLOGLIST_DATA:
        return Object.assign({},state,action.data)
        break;

        default:
        return state

    }
}