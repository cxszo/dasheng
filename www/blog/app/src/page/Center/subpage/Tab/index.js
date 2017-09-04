import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            class1Off:true,
            class2Off:false
        }
    }
    love(){
        this.setState({
            class1Off:true,
            class2Off:false
        })
        let {actions} = this.props;
        let id = this.props.data[0].userid;
        let data = {
            accessToken:local_accessToken,
            or:'love',
            id:id
        }
        actions.getArticleList(data);
    }
    hot(){
        this.setState({
            class1Off:false,
            class2Off:true
        })
        let {actions} = this.props;
        let id = this.props.data[0].userid;
        let data = {
            accessToken:local_accessToken,
            or:'hot',
            id:id
        }
        actions.getArticleList(data);
    }
    render(){
        console.log(this.props)
        return(
            <div className="tab">
                <div className="title">
                    <li onClick = {this.love.bind(this)} className={this.state.class1Off?'active':''}><a>文章列表34</a></li>
                    <li onClick = {this.hot.bind(this)} className={this.state.class2Off?'active':''}><a>热门文章23</a></li>
                </div>
                <div className="wrap">
                    <ul>
                        {this.props.data.length =='0' || !this.props.data? null :
                        this.props.data.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <div className="wrap-content">
                                        <div className="author">
                                            <a className="ico">
                                                <img src={v.headimg}/>
                                            </a>
                                            <div className="name">
                                                <a>{v.name}</a>
                                                <span>08.16 16:45</span>
                                            </div>
                                        </div>
                                        <p className="biaoti">{v.title}</p>
                                        <p className="abstract">
                                        {v.intro}
                                        </p>
                                        <div className="meta">
                                            <a>
                                                <i className="read-ico"></i>
                                                {v.read}
                                            </a>
                                            <a>
                                                <i className="com-ico"></i>
                                                {v.comment}
                                            </a>
                                            <a>
                                                <i className="like-ico"></i>
                                                {v.love}
                                            </a>
                                        </div>
                                    </div>
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
export default Tab