import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title
let tagTitle  = ['推荐','前端','Android','后端','人工智能','ios','产品'];
class Tag extends React.Component{
	constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
           
        }
	}
	render(){
		return (
			<div className = "tag">
				<div className="tag-content">
					<div>热门文章</div>
					<ul>
						{
							tagTitle.map((v,i)=>{
								return (
									<li key={i}>
										<a>{v}</a>
									</li>				
								)
							})
						}
					</ul>
					
				</div>
			</div>
		)
	}
}
export default Tag