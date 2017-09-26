import React from 'react'
import {bindActionCreators} from 'redux'
import Detail from '../../page/Detail/'
import {connect} from 'react-redux'

import * as DetailActions from '../../action/Detail'

const BlogDetailWrap=props=>(
	<Detail {...props} />
)

const mapStateToProps=state=>({
	blogdetailData:state.BlogDetail.blogdetail,
	bloglikeData:state.BlogDetail.bloglike,
	blogcollectData:state.BlogDetail.blogcollect,
	bloglovelistData:state.BlogDetail.bloglovelist,
	loveMask:state.BlogDetail.loveMask,
	guanZhu:state.BlogDetail.guanZhu,
	isFinish:state.BlogDetail.isFinish,
	bloglogin:state.BlogDetail.bloglogin,
	comment:state.BlogDetail.comment,
	replayComment:state.BlogDetail.replayComment,
	commentArticle:state.BlogDetail.commentArticle,
	dianZan:state.BlogDetail.dianZan
})

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(DetailActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(BlogDetailWrap);
