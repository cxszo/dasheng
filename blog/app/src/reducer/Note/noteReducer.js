import * as types from '../../constant/Note/noteType.js'
const initialState = {
    note:'',
    newNote:'',
    codeDesc:{},
    isFinish:false,
    delNote:''
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
        
        case types.DEL_NOTE_DATA:
        console.log(state,'state')
        let _note = state.note.data;
        let id= action.data.data.id;
        console.log(id,'mingchao')
        let newNote = _note.filter(function(v,i){
            return v.id != id;
        })  
        state.note.data=newNote;
        return Object.assign({},state,{delNote:action.data,note:state.note})
        break;
        
        default:
        return state

    }
}

