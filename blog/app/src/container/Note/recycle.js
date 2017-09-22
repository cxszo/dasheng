import React from 'react'
import {bindActionCreators} from 'redux'
import Recycle from '../../page/Note/subpage/Recycle'
import {connect} from 'react-redux'

import * as NoteActions from '../../action/Note'

const notewrap=props=>(
	<Recycle {...props} />
)

const mapStateToProps=state=>({

	recycleArticle:state.BlogNote.recycleArticle//回收站
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(NoteActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(notewrap);
