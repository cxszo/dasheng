import * as types from '../../constant/Note/noteType.js'
const initialState = {
    blognote:'',
}
export default  function BlogNote(state=initialState,action){
    switch(action.type){
        case types.NOTE_DATA:
        return Object.assign({},state,{blognote:action.data})
        break;
        
        default:
        return state

    }
}

