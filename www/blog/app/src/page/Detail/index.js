import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header/'
import Article from './subpage/Article/'
import Comment from './subpage/Comment/'
import Like from './subpage/Like/'
import SideTool from './subpage/SideTool/'
import LoveList from './subpage/LoveList/'
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
		this.init();
	}
	componentWillReceiveProps(nextProps){
		let {isFinish} = nextProps;
        if(isFinish){
			this.init();
		}
	}
	init(){
		//检测登录
		if(Util.isLogin()){
			this.setState({
				islogin:true
			})
		}
		let {blogdetailData,blogliketData,loveMask,bloglovelistData,blogcollectData,actions} =this.props;
		let id = this.props.params.id || '';
		let data ={
			id:id
		};
		let _data = Object.assign({},data,Util.isLogin())
		actions.getDetailData(_data);//详情信息
		actions.getLoveList(data);//喜欢列表
		// actions.getLike(_data);//喜欢
		// actions.getCollect(_data);//收藏
	}
	render(){
		//详情信息
		let id = this.props.params.id || '';
		let {blogdetailData,bloglikeData,loveMask,bloglovelistData,blogcollectData,actions}=this.props;
		let detail = blogdetailData.data || [];
		let love = detail.love || '0';//喜欢数
		let is_love = detail.is_love || '';//是否自己的喜欢
		let is_collect = detail.is_collect || '';//是否自己收藏
		let is_following = detail.is_following ||'';//是否关注
		let collect = blogcollectData || [];//点击收藏
		let like = bloglikeData || [];//点击喜欢
		let bloglovelist= bloglovelistData.data || [];//喜欢列表
	
		return (
			<div>
				<Header isLogin={this.state.islogin}/>
				<Article data = {detail} actions = {actions} is_following ={is_following} id={id}/>
				<Like data = {like} love={love} is_love={is_love}  actions = {actions} id={id}/>
				{/* <Comment/> */}
				<SideTool collect ={collect} is_collect={is_collect}  actions = {actions} id={id}/>
				<LoveList show ={loveMask} data={bloglovelist} actions = {actions}/>
			</div>
		)
	}
}
export default Detail