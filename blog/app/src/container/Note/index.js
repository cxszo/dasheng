import React from 'react'
import {bindActionCreators} from 'redux'
import Note from '../../page/Note/'
import {connect} from 'react-redux'

import * as NoteActions from '../../action/Note'

const notewrap=props=>(
	<Note {...props} />
)

const mapStateToProps=state=>({
	blogNoteData:state.BlogNote.note,
	blogNewNote:state.BlogNote.newNote,
	codeDesc:state.BlogNote.codeDesc,
	isFinish:state.BlogNote.isFinish
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(NoteActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(notewrap);
