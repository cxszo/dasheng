import'./index.scss'

import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let E = require('wangeditor')  // 使用下载的源码
class Text extends React.Component{
	constructor(props) {
		super(props);
		this.state={
		}
	}
    componentDidMount(){
		// 创建编辑器
		var editor = new E('#editor')
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

		document.getElementById('btn1').addEventListener('click', function () {
			// 读取 html
			alert(editor.txt.html())
		}, false)
		
	}
	deltip(){
		
	}
	render(){
		console.log(window.editormd)
		return (
		<div className="text-n">
			<div className = 'title-edit'>
				<input type="text" placeholder="请输入标题"/>
			</div>
			<div id='editor' className="editor">
			</div>
			<button  className = 'save' id="btn2">保存</button>
			<button  className = 'publish' id="btn1">发布</button>
		</div>
		)
	}
}
export default Text