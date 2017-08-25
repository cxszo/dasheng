import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title

class Tag extends React.Component{
	constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
		
        }
	}
	componentDidMount(){
		
		
	}
	render(){
		return (
			<div className = "tag">
				<div className="tag-content">
					<div>热门文章</div>
					<ul>
						{
							this.props.data.length == 0 ? null :
							this.props.data.map((v,i)=>{
								return (
									<li key={i}>
										<a>{v.name}</a>
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