import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {bloglist} from '../../../../fetch/BlogList/'
class BlogList extends React.Component{
	constructor(props) {
		super(props);
		this.state={
            list:[]
		}
	}
	toSrc(){
		hashHistory.push("/Detail/1234")
    }
    componentDidMount(){
        bloglist(list =>{
            this.setState({
                list:list.data
            })
        })
    }
	render(){
		return (
			<div className="blogList">
				<ul>
					{
                        this.state.list.length == 0 ?  null :
						this.state.list.map((v,i)=>{
							return (
								<li key = {i} onClick={this.toSrc.bind(this)}>
									<div className = "left">
										<div className="left-content">
											<div className="author">
											      <a className="avatar" target="_blank" href="">
											        <img src={v.headimg} alt="96"/>
												  </a>      
												  <div className="name">
											        <a className="blue-link" href="">{v.name}</a>
											        <span className="time">{v.cdate}</span>
											      </div>
											</div>
											<div className="title">
												<h3>{v.title}</h3>
											</div>
											<div className="intro">
												<p>{v.intro}</p>
											</div>
											<div className="tj">
												<em><cite><img src="https://gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg"/></cite><span>{v.read}</span></em>
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