import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

let readeIco = require('../../../../static/img/browse.png');
import NoData from '../../../../components/NoData/'
class BlogList extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           
		}
	}
	toDeatilSrc(i){
		let {actions} = this.props;
		hashHistory.push("/Detail/"+i);

	}
	toCenterSrc(i){
		let {actions} = this.props;
		hashHistory.push("/Center/"+i);

    }
    componentDidMount(){
        
    }
	render(){
		return (
			<div className="blogList">
				<ul>
					{
                        this.props.data.length == 0 ?  <NoData/> :
						this.props.data.map((v,i)=>{
							return (
								<li key = {i}>
									<div className = "left">
										<div className="left-content">
											<div className="author">
											      <a className="avatar" target="_blank" onClick={this.toCenterSrc.bind(this,v.userid)}>
											        <img src={v.headimg} alt="96"/>
												  </a>      
												  <div className="name">
											        <a className="blue-link" href="">{v.blogger}</a>
											        <span className="time">{v.createAt.substring(0,10)}</span>
											      </div>
											</div>
											<div className="title" onClick={this.toDeatilSrc.bind(this,v.slug)}>
												<h3>{v.title}</h3>
											</div>
											<div className="intro">
												<p>{v.intro}</p>
											</div>
											<div className="tj">
												<em><cite><img src={readeIco}/></cite><span>{v.read}</span></em>
												<em><cite><img src="https://gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"/></cite><span>{v.comment}</span></em>
												<em><cite><img src="https://gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg"/></cite><span>{v.love}</span></em>		
											</div>
										</div>
									</div>
									{
										!v.img_url ? '' :
										<div className = "right">
											<div className="right-content">
												<img src={v.img_url}/>
											</div>
										</div>
									}
								</li>
							)
						})
					}
					
				</ul>
			</div>
		)
	}
}
export default BlogList