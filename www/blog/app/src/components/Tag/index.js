import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title
let tagTitle  = ['我关注的','前端','设计','后台','产品'];
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