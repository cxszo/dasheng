import React from 'react'
import {bindActionCreators} from 'redux'
import SignIn from '../../page/SignIn/'
import {connect} from 'react-redux'

import * as SignInActions from '../../action/SignIn'

const signInwrap=props=>(
	<SignIn {...props} />
)

const mapStateToProps=state=>({
	SignInData:state.SignIn.SignInData
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(SignInActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(signInwrap);
