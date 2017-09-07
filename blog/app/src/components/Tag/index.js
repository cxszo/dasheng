import './index.scss'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//配置导航的title
let g = {
	turnOff : false
}
class Tag extends React.Component{
	constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
			turnOff:100
        }
	}
	componentDidMount(){
		
		
	}
	handerClick(i,index){
		let {actions } = this.props;
		let data ={tag:i};
		this.setState({
			turnOff:index
		})
		g.turnOff = true;
		actions.getListData(data);
		actions.getTitleData_2(i);//博客标题2
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
									<li key={i} onClick={this.handerClick.bind(this,v.id,i)} className={i==this.state.turnOff ? 'cur':''}>
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