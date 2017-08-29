import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header/'
import Article from './subpage/Article/'
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
		let {blogdetailData,actions} =this.props;
		let id = this.props.params.id || '';
		let data ={
			id:id
		};
		let _data = Object.assign({},data,Util.isLogin())
		actions.getDetailData(_data);//详情信息
	}
	render(){
		//详情信息
		let {blogdetailData,actions}=this.props;
		let detail = blogdetailData.data || [];
		return (
			<div>
				<Header isLogin={this.state.islogin}/>
				<Article data = {detail} actions = {actions}/>
				<SideTool/>
			</div>
		)
	}
}
export default Detail