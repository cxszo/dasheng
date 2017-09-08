import'./index.scss'

import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


console.log(test())

class Text extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
    componentDidMount(){
		//console.log(window.editormd)
		// var testEditor;
		// testEditor = editormd("test-editormd", {
		// 	width   : "90%",
		// 	height  : 640,
		// 	syncScrolling : "single",
		// 	path    : "../lib/"
		// });
    }
	render(){
		console.log(window.editormd)
		return (
        <div className="text-n">
			
		</div>
		)
	}
}
export default Text