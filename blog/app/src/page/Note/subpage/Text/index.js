import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
require('jquery');
require('../../../../util/zepto.min.js')
let test = require('../../../../util/editormd.min.js')
console.log(test())


class Text extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
    componentDidMount(){
        
    }
	render(){
		return (
        <div className="text-n">
			 
		</div>
		)
	}
}
export default Text