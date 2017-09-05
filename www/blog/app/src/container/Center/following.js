import React from 'react'
import {bindActionCreators} from 'redux'
import Following from '../../page/Center/Following'
import {connect} from 'react-redux'

import * as CenterActions from '../../action/Center'

const BlogCenterWrap=props=>(
	<Following {...props} />
)

// const mapStateToProps=state=>({
// 	bloglogin:state.BlogCenter.bloglogin
// })
const mapStateToProps=state=>{
    return{
        blogloginData:state.BlogCenter.bloglogin,
        blogGuanZhuData:state.BlogCenter.blogGuanzhu,
        blogArticleData:state.BlogCenter.blogArticle,
        followlist:state.BlogCenter.followList,
        editSign:state.BlogCenter.editSign
    }
}

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(CenterActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(BlogCenterWrap);
