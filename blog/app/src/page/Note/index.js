import'./index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Wj from './subpage/Wj/'
import Wz from './subpage/Wz/'
import Text from './subpage/Text/'
import Loading from '../../components/Load/'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Note extends React.Component{
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);		
		this.state={
           
		}
	}
    componentDidMount(){
		this.wj();//文集列表
		
	}
	componentWillReceiveProps(nextProps){
		if(this.props.blogNoteData === ''){
			this.wz();//文章列表
		}
		// if(this.props.textArticle === '' && (typeof this.props.articleData == 'object')){
		// 	let {wzTargetId} = this.props;
		// 	this.Text();//文章内容
		// }
	}
	wj(){//文集
		let {actions} = this.props;
		let data= {
			accessToken:local_accessToken
		}
		actions.getNotetData(data);
	}
	wz(){//文章
		let {actions} = this.props;
		let data= {
			accessToken:local_accessToken
		}
		actions.getarticleData(data);
	}
	Text(){//文章内容
		let {actions,wzTargetId} = this.props;
		let data= {
			id:wzTargetId,
			accessToken:local_accessToken
		}
		actions.textArticleData(data);
	}
	render(){
		let {blogNoteData,blogNewNote,articleData,newArticle,textArticle,wzId,codeDesc,actions,noteTargetId} = this.props;
		let wj =  blogNoteData.data|| '';//文集
		let wj_code = codeDesc.code || '';//文集code
		let wj_desc = codeDesc.desc || '';//文集desc
		let article = newArticle.data || '';//文章列表
		let _textArticle = textArticle.data || '';//文章内容
		console.log(this.props)
		return (
        <div>
			<Wj data={wj} actions ={actions} code ={wj_code} desc = {wj_desc}/>
			<Wz data={article} actions={actions} noteTargetId={noteTargetId}/>
			<Text data={_textArticle} actions={actions} wzId={wzId}/>
			{
				!article ? <Loading/> : null
			}
		</div>
		)
	}
}
export default Note