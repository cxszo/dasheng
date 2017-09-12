import * as types from '../../constant/Note/noteType.js'
const initialState = {
    note:'',
    newNote:'',
    codeDesc:{},
    isFinish:false
}
export default  function BlogNote(state=initialState,action){
    switch(action.type){
        case types.NOTE_DATA:
        return Object.assign({},state,{note:action.data,isFinish:false})
        break;
        case types.NEW_NOTE_DATA:
        let note = state.note;
        let temp = action.data.data;
        note.data.unshift(temp)
        return Object.assign({},state,{newNote:action.data,codeDesc:action.codeDesc,isFinish:action.codeDesc.code=='1'? true : false,note})
        break;
        
        default:
        return state

    }
}

