import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title
import {blogtag} from '../../fetch/BlogTag/'
class Tag extends React.Component{
	constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
			tagTitle:[]
        }
	}
	componentDidMount(){
		blogtag(tag =>{
            this.setState({
                tagTitle:tag.data
			})
        })
		
	}
	render(){
		return (
			<div className = "tag">
				<div className="tag-content">
					<div>热门文章</div>
					<ul>
						{
							this.state.tagTitle.length == 0 ? null :
							this.state.tagTitle.map((v,i)=>{
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