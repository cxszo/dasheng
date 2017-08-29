import * as types from '../../constant/Home/homeType.js'
const initialState = {
    bloglist:'',
    blogtitle:'',
    blogtitle_2:'',
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

        case types.TITLE_DATA_2:
        return Object.assign({},state,{blogtitle_2:action.data})
        break;

        case types.AUTHOR_DATA:
        return Object.assign({},state,{blogauthor:action.data})
        break;
        
        default:
        return state

    }
}

