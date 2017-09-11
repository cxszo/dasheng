import React from 'react'
import {bindActionCreators} from 'redux'
import Note from '../../page/Note/'
import {connect} from 'react-redux'

import * as NoteActions from '../../action/Note'

const notewrap=props=>(
	<Note {...props} />
)

const mapStateToProps=state=>({
	blogNoteData:state.BlogNote.note
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(NoteActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(notewrap);
