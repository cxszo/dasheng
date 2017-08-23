import React from 'react'
import {bindActionCreators} from 'redux'
import Blog from '../../page/Home/'
import {connect} from 'react-redux'

import * as HomeActions from '../../action/Home'

const BlogWrap=({bloglistData,actions})=>{
	return <div>
		<Blog bloglistData={bloglistData} actions={actions}/>
	</div>
}
const mapStateToProps=state=>{
	console.log(state)
	return {bloglistData:state.BlogList}
}

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(HomeActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(BlogWrap);
