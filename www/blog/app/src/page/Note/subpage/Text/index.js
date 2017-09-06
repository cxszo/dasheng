import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

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
        <div className="text">文字编辑</div>
		)
	}
}
export default Text