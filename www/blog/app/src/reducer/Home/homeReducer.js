import * as types from '../../constant/Home/homeType.js'
const initialState = {
    bloglist:'',
    blogtitle:'',
    blogauthor:''
}
export default  function BlogList(state=initialState,action){
    switch(action.type){
        case types.BLOGLIST_DATA:
        return Object.assign({},state,{bloglist:action.data})
        break;

        case types.TITLE_DATA:
        return Object.assign({},state,{blogtitle:action.data})
        break;

        case types.AUTHOR_DATA:
        return Object.assign({},state,{blogauthor:action.data})
        break;
        
        default:
        return state

    }
}

