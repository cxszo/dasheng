import React from 'react'
import {bindActionCreators} from 'redux'
import Blog from '../../page/Home/'
import {connect} from 'react-redux'

import * as HomeActions from '../../action/Home'

const BlogWrap=props=>(
	<Blog {...props} />
)

const mapStateToProps=state=>({

	bloglistData:state.BlogList.bloglist,
	blogtitleData:state.BlogList.blogtitle,
	blogauthorData:state.BlogList.blogauthor
	
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(HomeActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(BlogWrap);
