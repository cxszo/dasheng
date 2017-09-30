import React from 'react'
import {bindActionCreators} from 'redux'
import Sign from '../../page/Sign/'
import {connect} from 'react-redux'

import * as SignActions from '../../action/Sign'

const signwrap=props=>(
	<Sign {...props}/>
)

const mapStateToProps=state=>({
	SignInData:state.BlogSign.SignInData,
	SignInCode:state.BlogSign.SignInCode,
	SignInDesc:state.BlogSign.SignInDesc,
	SignUpData:state.BlogSign.SignUpData,
	SignUpCode:state.BlogSign.SignUpCode,
	SignUpDesc:state.BlogSign.SignUpDesc
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(SignActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(signwrap);
