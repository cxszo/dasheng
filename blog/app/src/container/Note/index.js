import React from 'react'
import {bindActionCreators} from 'redux'
import NoteBooks from '../../page/Note/'
import {connect} from 'react-redux'

import * as HomeActions from '../../action/Home'

const note=props=>(
	<NoteBooks {...props} />
)

const mapStateToProps=state=>({
	blognoteData:state.BlogList.blognote,
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(HomeActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(note);
