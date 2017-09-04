import React from 'react'
import {bindActionCreators} from 'redux'
import Likes from '../../page/Center/likes'
import {connect} from 'react-redux'

import * as CenterActions from '../../action/Center'

const BlogCenterWrap=props=>(
	<Likes {...props} />
)

// const mapStateToProps=state=>({
// 	bloglogin:state.BlogCenter.bloglogin
// })
const mapStateToProps=state=>{
    return{
        blogloginData:state.BlogCenter.bloglogin,
        blogGuanZhuData:state.BlogCenter.blogGuanzhu,
        blogArticleData:state.BlogCenter.blogArticle
    }
}

const mapDispatchToProps=dispatch=>({
	actions:bindActionCreators(CenterActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(BlogCenterWrap);
