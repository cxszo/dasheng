import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Wj from './subpage/Wj/'
import Wz from './subpage/Wz/'
import Text from './subpage/Text/'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Note extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
    componentDidMount(){
		this.wj();//文集列表
		this.wz();//文章列表
	}
	// componentWillReceiveProps(nextProps){
	// 	let {isFinish} = nextProps;
    //     if(isFinish){
	// 		this.wj();//文集列表
    //     }
	// }
	wj(){
		let {actions} = this.props;
		let data= {
			accessToken:local_accessToken
		}
		actions.getNotetData(data);
	}
	wz(){
		let {actions} = this.props;
		let data= {
			accessToken:local_accessToken
		}
		actions.getarticleData(data);
	}
	render(){
		
		let {blogNoteData,blogNewNote,articleData,codeDesc,actions} = this.props;
		let wj =  blogNoteData.data|| '';//文集
		let wj_code = codeDesc.code || '';//文集code
		let wj_desc = codeDesc.desc || '';//文集desc
		let article = articleData.data || '';//文章列表

		return (
        <div>
			<Wj data = {wj} actions ={actions} code ={wj_code} desc = {wj_desc}/>
			<Wz data = {article} actions={actions}/>
			<Text/>
		</div>
		)
	}
}
export default Note