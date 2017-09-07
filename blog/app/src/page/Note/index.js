import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Wj from './subpage/Wj/'
import Wz from './subpage/Wz/'
import Text from './subpage/Text/'
class Note extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
    componentDidMount(){
        
    }
	render(){
		return (
        <div>
			<Wj/>
			<Wz/>
			<Text/>
		</div>
		)
	}
}
export default Note