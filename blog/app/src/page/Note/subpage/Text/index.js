import'./index.scss'

import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

let local_accessToken = localStorage.getItem('accessToken') || '';
let E = require('wangeditor')  // 使用下载的源码
let editor;
class Text extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			title:''
		}
	}
    componentDidMount(){
		// editor.txt.html(this.props.data.content);
		editor = new E('#editor')
		editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
		// 自定义菜单配置
		editor.customConfig.menus = [
			'head',  // 标题
			'bold',  // 粗体
			'italic',  // 斜体
			'underline',  // 下划线
			'strikeThrough',  // 删除线
			'foreColor',  // 文字颜色
			'backColor',  // 背景颜色
			'link',  // 插入链接
			'list',  // 列表
			'justify',  // 对齐方式
			'quote',  // 引用
			'image',  // 插入图片
			'table',  // 表格
			'video',  // 插入视频
			'code',  // 插入代码
			'undo',  // 撤销
			'redo'  // 重复
		]
		editor.create()
		editor.txt.html(this.props.data.content)
		
	}
	componentWillReceiveProps(nextProps){
		editor.txt.html(nextProps.data.content)
		this.setState({
			title:nextProps.data.title
		})
	}
	saveArticle(){//保存文章
		let {actions,wzId} = this.props;
		let titleInput = this.refs.titleInput;
		let val = titleInput.value;
		let content = editor.txt.html();
		let data = {
			id:wzId,
			title:val,
			content:content,
			note_type:'',
			accessToken:local_accessToken
		}
		actions.saveArticleData(data);
	}
	fbArticle(){//发布文章
		let {actions,wzId} = this.props;
		let data = {
			id:wzId,
			accessToken:local_accessToken
		}
		actions.fbArticleData(data);
	} 
	render(){
		return (
		<div className="text-n">
			<div className = 'title-edit'>
				<input type="text" placeholder="请输入标题" ref = 'titleInput' onChange = {e=>{
					this.setState({title:e.currentTarget.value})}} value={this.state.title}/>
			</div>
			<div id='editor' className="editor">
				
			</div>
			<button  className = 'save' id="btn2" onClick={this.saveArticle.bind(this)}>保存</button>
			<button  className = 'publish' id="btn1" onClick={this.fbArticle.bind(this)}>发布</button>
		</div>
		)
	}
}
export default Text