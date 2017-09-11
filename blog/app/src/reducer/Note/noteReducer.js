import * as types from '../../constant/Note/noteType.js'
const initialState = {
    note:'',
}
export default  function BlogNote(state=initialState,action){
    switch(action.type){
        case types.NOTE_DATA:
        return Object.assign({},state,{note:action.data})
        break;
        
        default:
        return state

    }
}

