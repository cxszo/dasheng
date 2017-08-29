import React from 'react'
import {bindActionCreators} from 'redux'
import Detail from '../../page/Detail/'
import {connect} from 'react-redux'

import * as DetailActions from '../../action/Detail'

const BlogDetailWrap=props=>(
	<Detail {...props} />
)

const mapStateToProps=state=>({
	blogdetailData:state.BlogDetail.blogdetail
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(DetailActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(BlogDetailWrap);
