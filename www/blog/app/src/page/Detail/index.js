import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header/'
import Article from './subpage/Article/'
import Comment from './subpage/Comment/'
import Like from './subpage/Like/'
import SideTool from './subpage/SideTool/'
import {Util} from '../../util/util.js'

class Detail extends React.Component{
	  constructor(props, context) {
        super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
            islogin: false
        }
	}
	componentDidMount(){
		//检测登录
		if(Util.isLogin()){
            this.setState({
                islogin:true
            })
		}
		let {blogdetailData,blogliketData,blogcollectData,actions} =this.props;
		let id = this.props.params.id || '';
		let data ={
			id:id
		};
		let _data = Object.assign({},data,Util.isLogin())
		actions.getDetailData(_data);//详情信息
		actions.getLike(_data);//喜欢
		actions.getCollect(_data);//收藏		
		console.log(this.props)
	}
	render(){
		//详情信息
		let id = this.props.params.id || '';
		let {blogdetailData,blogliketData,blogcollectData,actions}=this.props;
		console.log(this.props)
		let detail = blogdetailData.data || [];
		// let collect = blogcollectData.data || [];
		// let like = bloglikeData.data || [];
		return (
			<div>
				<Header isLogin={this.state.islogin}/>
				<Article data = {detail} actions = {actions} id={id}/>
				<Comment/>
				<Like actions = {actions} id={id}/>
				<SideTool  actions = {actions} id={id}/>
			</div>
		)
	}
}
export default Detail