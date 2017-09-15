import React from 'react'
import {bindActionCreators} from 'redux'
import Note from '../../page/Note/'
import {connect} from 'react-redux'

import * as NoteActions from '../../action/Note'

const notewrap=props=>(
	<Note {...props} />
)

const mapStateToProps=state=>({
	blogNoteData:state.BlogNote.note,//文集列表
	blogNewNote:state.BlogNote.newNote,//新建文集
	codeDesc:state.BlogNote.codeDesc,
	isFinish:state.BlogNote.isFinish,
	articleData:state.BlogNote.article,//文章列表
	addArticle:state.BlogNote.addArticle,//新增文章
	newArticle:state.BlogNote.newArticle,
	noteTargetId:state.BlogNote.noteTargetId
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(NoteActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(notewrap);
